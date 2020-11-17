// 声明式语法
pipeline{
    agent{
        label "node"
    }
    stages{
        stage("checkout"){
            steps{
                git clone "https://github.com/JL-Code/dockerize-vue.git"
            }
            post{
                always{
                    echo "========always========"
                }
                success{
                    echo "========A executed successfully========"
                }
                failure{
                    echo "========A execution failed========"
                }
            }
        }
        stage("build"){
            steps{
                npm --registry "https://registry.npm.taobao.org" install express 
                npm install && npm run build
            }
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}