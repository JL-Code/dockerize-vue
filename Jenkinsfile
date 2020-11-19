#!groovy

pipeline {
    agent {
        docker {
            image 'node:12'
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
                sh "npm -v"
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
                            reportDir            : 'test-report',
                            reportFiles          : 'index.html',
                            reportName           : 'Test Report'
                    ]

                    junit 'test-report/*.xml'

                    step([
                            $class             : 'CoberturaPublisher',
                            coberturaReportFile: 'coverage/clover.xml'
                    ])
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

    }
}