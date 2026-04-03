pipeline {
    agent any

    environment {
        PATH = "/Users/dau/.nvm/versions/node/v24.14.1/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
            post {
                always {
                    archiveArtifacts artifacts: 'coverage/**', allowEmptyArchive: true
                }
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
            post {
                always {
                    archiveArtifacts artifacts: 'dist/**', allowEmptyArchive: true
                }
            }
        }

        stage('Deploy Simulation') {
            steps {
                sh 'mkdir -p staging'
                sh 'cp -r dist/* staging/'
                sh 'echo "Deploy simulation complete - app files copied to staging"'
                sh 'ls -l staging'
            }
        }
    }
}
