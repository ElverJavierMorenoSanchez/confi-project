pipeline {
    agent any

    stages {
        stage('GIT CLONE') {
            steps {
                script {
                    try {
                        isSuccess = sh(script: "ssh -t ejmoreno23@20.90.147.49", returnStatus:true)
                        println "isSuccess: ${isSuccess}"
                        sh "rm -rf test_main/"
                        git branch: 'main', url: 'https://github.com/ElverJavierMorenoSanchez/confi-project.git'
                    } catch (exc) {
                        println 'No se pudo clonar el repositorio'
                    }
                }
            }
        }
        stage('Test 2') {
            steps {
                sh 'echo "Test"'
            }
        }
        stage('Test 3') {
            steps {
                sh 'echo "Test"'
            }
        }
    }
}
