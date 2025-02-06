pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/nattawut29427/Portfolio1.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t 66022747-nextjs .'
            }
        }

        stage('Push Docker Image') {
            steps {
                withDockerRegistry([credentialsId: 'docker-hub', url: '']) {
                    sh 'docker tag 66022747-nextjs nattawut29427/66022747-nextjs:latest'
                    sh 'docker push nattawut29427/66022747-nextjs:latest'
                }
            }
        }

        stage('Deploy with Ansible') {
            steps {
                sh 'ansible-playbook playbook/deploy.yaml'
            }
        }
    }
}
