pipeline {
    agent any

    environment {
        NODE_HOME = '/usr/local/bin/' // Update this if your Node.js path is different
        PATH = "${NODE_HOME}:${env.PATH}"
    }

    stages {
        stage('Check Node & npm Version') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/raj-dhamdhere/HealthExpress.git', credentialsId: 'github-token'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install backend dependencies
                dir('backend') {
                    echo 'Installing backend dependencies...'
                    sh 'npm install --unsafe-perm --verbose'  // Add verbose and unsafe-perm flags for debugging
                }
                // Install frontend dependencies
                dir('frontend') {
                    echo 'Installing frontend dependencies...'
                    sh 'npm install --unsafe-perm --verbose'  // Add verbose and unsafe-perm flags for debugging
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
                // Deploy backend with pm2
                dir('backend') {
                    echo 'Starting backend server with pm2...'
                    sh 'pm2 start index.js --name "app-backend" || node index.js' 
                }
                // Deploy frontend with pm2
                dir('frontend') {
                    echo 'Starting frontend application with pm2...'
                    sh 'npm start'
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
