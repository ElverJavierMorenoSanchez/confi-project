pipeline {
    agent any

    stages {
        stage('GIT CLONE') {
            agent {
                ssh {
                    hostName '20.90.147.49'
                    credentialsId 'ssh_access'
                }
            }
            steps {
                script {
                    try {
                        sh "rm -rf test_main/"
                        git branch: 'main', url: 'https://github.com/ElverJavierMorenoSanchez/confi-project.git'
                        sh "pwd"
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
