pipeline {
    agent any

    environment {
        NODE_HOME = '/usr/local/bin/' // Update if your Node.js path is different
        PATH = "${NODE_HOME}:${env.PATH}"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/raj-dhamdhere/HealthExpress.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install backend dependencies
                dir('backend') {
                    echo 'Installing backend dependencies...'
                    sh 'npm install'
                }
                // Install frontend dependencies
                dir('frontend') {
                    echo 'Installing frontend dependencies...'
                    sh 'npm install'
                }
            }
        }


        stage('Build') {
            steps {
                // Build frontend project
                dir('frontend') {
                    echo 'Building frontend...'
                    sh 'npm run build'
                }

            }
        }

        stage('Deploy') {
            steps {
                // Deploy backend
                dir('backend') {
                    echo 'Deploying backend...'
                    sh 'nodemon index.js || node index.js --name "app-backend"'
                }
                // Deploy frontend if it's on a separate server (optional)
                dir('frontend') {
                    echo 'Deploying frontend...'
                    sh 'npm start --name "app-frontend"'
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
