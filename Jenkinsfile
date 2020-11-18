#!groovy

pipeline {
    agent any
    stages {
        stage("Checkout") {
            steps {
                git "https://github.com/JL-Code/dockerize-vue.git"
            }
        }
        stage('Build') {
            agent {
                docker {
                    image 'node:10'
                }
            }
            steps {
                sh "node --version"
                sh "npm --version"
                sh "npm --registry https://registry.npm.taobao.org install express && npm info express"
                sh "npm install && npm run build"
            }
        }

    }
}