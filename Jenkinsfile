pipeline {
    agent any

    environment {
        NODE_HOME = 'C:\\Program Files\\nodejs'
        NPM_GLOBAL = 'C:\\Users\\Administrator\\AppData\\Roaming\\npm'
        BACKEND_NODE_BIN = 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\NodeJS-Pipeline\\Backend\\node_modules\\.bin'
        HOMEPATH = 'C:\\Users\\Administrator'
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
                echo 'Installing pm2 globally...'
                bat 'npm install -g pm2' // Only install pm2 globally

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

        stage('Deploy Frontend with NGINX on Port 3000') {
            steps {
                script {
                    // Ensure NGINX is installed on your EC2 instance
                    echo 'Deploying frontend with NGINX on port 3000...'
                    
                    // Copy build files to NGINX directory
                    bat '''
                    if not exist "C:\\nginx" (
                        echo Downloading and setting up NGINX...
                        powershell -Command "Invoke-WebRequest -Uri https://nginx.org/download/nginx-1.25.2.zip -OutFile nginx.zip; Expand-Archive -Path nginx.zip -DestinationPath C:\\; Rename-Item -Path C:\\nginx-* -NewName C:\\nginx"
                    )
                    xcopy client\\build C:\\nginx\\html /E /Y
                    '''

                    // Update NGINX configuration for port 3000
                    writeFile file: 'C:\\nginx\\conf\\nginx.conf', text: '''
                    worker_processes 1;
                    events { worker_connections 1024; }
                    http {
                        server {
                            listen 3000;
                            server_name localhost;

                            location / {
                                root C:/nginx/html;
                                index index.html;
                            }

                            # Redirect other routes to index.html for SPA
                            location / {
                                try_files $uri /index.html;
                            }
                        }
                    }
                    '''

                    // Restart NGINX to apply changes
                    bat '''
                    taskkill /F /IM nginx.exe || echo NGINX not running, starting it now...
                    start /B C:\\nginx\\nginx.exe
                    '''
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
