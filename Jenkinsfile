pipeline {
    agent any

    environment {
        NODE_HOME = '/usr/local/bin/'
        PATH = "${NODE_HOME}:${env.PATH}"
    }


    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/raj-dhamdhere/HealthExpress.git', credentialsId: 'github-token'
            }
        }

        stage('Verify Backend Directory') {
            steps {
                dir('backend') {
                    echo 'Checking contents of backend directory...'
                    sh 'ls -la'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('backend') {
                    echo 'Installing backend dependencies...'
                    sh 'npm install --unsafe-perm --verbose'
                }
                dir('frontend') {
                    echo 'Installing frontend dependencies...'
                    sh 'npm install --unsafe-perm --verbose'
                }
            }
        }

        stage('Build') {
            steps {
                dir('frontend') {
                    echo 'Building frontend...'
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                dir('backend') {
                    echo 'Starting backend server with pm2...'
                    sh 'pm2 start index.js --name "app-backend" || node index.js'
                }
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
