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
                bat 'npm install -g pm2 http-server' // Install both pm2 and http-server globally
                
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

        // stage('Build Frontend') {
        //     steps {
        //         dir('client') {
        //             echo 'Building frontend...'
        //             bat 'set CI=false && npm run build'
        //         }
        //     }
        // }

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
                    echo 'Starting frontend application in the background and monitoring output...'
                    bat '''
                        REM Start npm in the background and redirect output to npm_output.log
                        start /B cmd /c "npm start > npm_output.log 2>&1"
        
                        REM Wait until "Compiled successfully!" appears in the output
                        :loop
                        findstr /C:"Compiled successfully" npm_output.log
                        if %errorlevel% neq 0 (
                            ping -n 2 127.0.0.1 >nul
                            goto loop
                        )
        
                        REM Kill the npm process after detecting the output
                        for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000') do taskkill /PID %%a /F
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
