#!groovy

pipeline {
    agent {
        docker {
            image 'node:10'
        }
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