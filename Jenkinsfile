pipeline {
    agent any

    stages {
        stage('GIT CLONE') {
            script {
                try {
                    sh "rm -rf test_main/"
                    git branch: 'main', url: 'https://github.com/ElverJavierMorenoSanchez/confi-project.git'
                } catch (exc) {
                    println 'No se pudo clonar el repositorio'
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
