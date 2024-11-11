pipeline {
    agent any

    environment {
        NODE_HOME = 'C:\\Program Files\\nodejs'
        NPM_GLOBAL = 'C:\\Users\\Administrator\\AppData\\Roaming\\npm' // Update this path accordingly
        BACKEND_NODE_BIN = 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\NodeJS-Pipeline\\Backend\\node_modules\\.bin'
        HOMEPATH = 'C:\\Users\\Administrator' // Set HOMEPATH for PM2 on Windows
        PATH = "${NODE_HOME};${NPM_GLOBAL};${BACKEND_NODE_BIN};${env.PATH}"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/raj-dhamdhere/HealthExpress.git', credentialsId: 'github-token'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing pm2 and http-server globally...'
                bat 'npm install -g pm2 http-server' // Install both pm2 and http-server
                
                // Install backend dependencies
                dir('Backend') {
                    echo 'Installing backend dependencies...'
                    bat 'npm install --quiet'
                }

                // Install frontend dependencies
                dir('client') {
                    echo 'Installing frontend dependencies...'
                    bat 'npm install --force --quiet'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('client') {
                    echo 'Building frontend...'
                    bat 'set CI=false && npm run build'
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
                    echo 'Serving frontend application with http-server...'
                    bat 'pm2 start http-server --name "frontend" -- ./build -p 3000' // Updated command
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
