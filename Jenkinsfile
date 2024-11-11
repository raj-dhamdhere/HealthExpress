pipeline {
    agent any

    environment {
        NODE_HOME = 'C:\\Program Files\\nodejs'
        PATH = "${NODE_HOME};${env.PATH}"
    }

    options {
        timeout(time: 45, unit: 'MINUTES')
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/raj-dhamdhere/HealthExpress.git', credentialsId: 'github-token'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install pm2 for process management

                dir('client') {
                echo 'Installing pm2 globally.for Backend..'
                bat 'npm install pm2'
                }
                // Backend dependencies
                dir('Backend') {
                    echo 'Installing backend dependencies...'
                    bat 'npm install --quiet'
                }

                // Frontend dependencies
                dir('client') {
                    echo 'Installing frontend dependencies...'
                    bat 'npm install --force --quiet'
                }
            }
        }



        stage('Deploy Backend') {
            steps {
                dir('Backend') {
                    echo 'Starting backend server with pm2...'
                    bat 'pm2 start index.js --name "app-backend"'
                }
            }
        }



        stage('Deploy Frontend') {
            steps {
                dir('client') {
                    echo 'Starting frontend application with pm2...'
                    bat 'npm start'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
