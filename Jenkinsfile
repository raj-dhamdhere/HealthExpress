pipeline {
    agent any

    environment {
        NODE_HOME = 'C:\\Program Files\\nodejs'  // Adjust the path if Node.js is installed elsewhere
        PATH = "${NODE_HOME};${env.PATH}"       // Add Node.js to PATH
    }

    options {
        timeout(time: 45, unit: 'MINUTES')       // Sets a maximum time for the entire pipeline
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/raj-dhamdhere/HealthExpress.git', credentialsId: 'github-token'
            }
        }

        stage('Verify Backend Directory') {
            steps {
                dir('Backend') {
                    echo 'Checking contents of backend directory...'
                    bat 'dir'                      // Windows equivalent of `ls -la`
                }
            }
        }

        
        stage('Install Dependencies') {
            steps {
                dir('Backend') {
                    echo 'Installing backend dependencies...'
                    bat 'npm install --quiet'       // Install dependencies for Backend
                }

                dir('client') {
                    echo 'Installing frontend dependencies...'
                    bat 'npm install --force --quiet'  // Install dependencies for client
                }
            }
        }


        stage('Deploy') {
            steps {
                dir('Backend') {
                    echo 'Starting backend server with pm2...'
                    // Starts backend with pm2 if installed, otherwise fallback to node
                    bat 'node index.js'
                }
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
