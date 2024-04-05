def remote=[:]
remote.name = "ejmoreno23"
remote.host = "20.90.147.49"
remote.allowAnyHosts = true 

pipeline {
    agent any
    environment {
        SSH_ACCESS_CREDS = credentials('vm_access')
        
    }
    stages {
        stage('GIT CLONE') {
            steps {
                script {
                    //remote.user=env.SSH_ACCESS_CREDS_USR
                    //remote.password=env.SSH_ACCESS_CREDS_PSW
                    sh "node -v"
                }
                //sshCommand(remote: remote, command: 'pwd')
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
