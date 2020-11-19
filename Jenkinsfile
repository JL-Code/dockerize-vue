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
                    publishHTML target: [
                            allowMissing         : false,
                            alwaysLinkToLastBuild: false,
                            keepAll              : true,
                            reportDir            : 'coverage/lcov-report',
                            reportFiles          : 'index.html',
                            reportName           : 'Coverage Report'
                    ]

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
            steps {
                script {
                    def dockerRegistry = "nexus.highzap.com:8082"
                    def dockerNamespace = "cloud"
                    def dockerImage = "cloud-web"
                    def dockerTag = "1.0.0"
                    def dockerfile = "Dockerfile.dockerfile"

                    def dockerName = "${dockerRegistry}/${dockerNamespace}/${dockerImage}:${dockerTag}"
                    def customImage = docker.build(dockerName,"-f ${dockerfile}")

                    customImage.push()
                }
            }
        }

    }
}