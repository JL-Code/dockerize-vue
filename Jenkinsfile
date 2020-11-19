#!groovy

// Pipeline 如何支撑参数化构建？
pipeline {
    agent {
        docker {
            image 'node:12'
            args '-v npm_cache:/root/.npm'
        }
    }

    environment {
        HOME = '.'
    }

    stages {

        stage('checkout') {
            steps {
                git "https://github.com/JL-Code/dockerize-vue.git"
            }
        }
        stage('config') {
            steps {
                sh "npm config set registry https://registry.npm.taobao.org"
            }
        }
        stage('info') {
            steps {
                sh "npm config get registry"
                sh "node -v"
                sh "npm -v"
            }
        }
        stage('restore') {
            steps {
                sh "npm install "
            }
        }

        stage('test') {
            steps {
                sh "npm run test:unit"
            }
            post {
                always {
                    // 发送代码覆盖率 html 文件
                    publishHTML target: [
                            allowMissing         : false,
                            alwaysLinkToLastBuild: false,
                            keepAll              : true,
                            reportDir            : 'coverage/lcov-report',
                            reportFiles          : 'index.html',
                            reportName           : 'Coverage Report'
                    ]
                    // 归档测试记录
                    junit 'test-report/*.xml'
                }
            }
        }

        stage('build') {
            steps {
                sh "npm run build"
            }
            post {
                success {
                    archiveArtifacts artifacts: 'dist/**', fingerprint: true
                }
            }
        }

        stage('release') {
            agent any
//            agent {
//                node {
//                    label 'master'
//                    customWorkspace env.WORKSPACE
//                }
//            }
            steps {
                sh "echo env.WORKSPACE :${env.WORKSPACE}"
                script {
                    def dockerRegistry = "nexus.highzap.com:8082"
                    def dockerNamespace = "cloud"
                    def dockerImage = "cloud-web"
                    def dockerTag = "1.0.0"
                    def dockerfile = "text.text"
                    def dockerName = "${dockerRegistry}/${dockerNamespace}/${dockerImage}:${dockerTag}"

                    /**
                     * It is possible to pass other arguments to docker build by adding them to the second argument
                     * of the build() method. When passing arguments this way, the last value in the that string
                     * must be the path to the docker file and should end with the folder to use as the build context)
                     *
                     * This example overrides the default Dockerfile by passing the -f flag:
                     *
                     * node {*     checkout scm
                     *     def text = 'Dockerfile.test'
                     *     def customImage = docker.build("my-image:${env.BUILD_ID}", "-f ${text} ./dockerfiles")
                     *}* Builds my-image:${env.BUILD_ID} from the Dockerfile found at ./dockerfiles/Dockerfile.test.
                     */
                    def customImage = docker.build(dockerName, "-f ${dockerfile} ./")

                    customImage.push()
                }
            }
        }

    }
}