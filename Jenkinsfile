pipeline {
    agent any

    environment {
        NODE_HOME = 'C:\\Program Files\\nodejs'
        NPM_GLOBAL = 'C:\\Users\\Administrator\\AppData\\Roaming\\npm'
        BACKEND_NODE_BIN = 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\NodeJS-Pipeline\\Backend\\node_modules\\.bin'
        HOMEPATH = 'C:\\Users\\Administrator'
        PATH = "${NODE_HOME};${NPM_GLOBAL};${BACKEND_NODE_BIN};${env.PATH}"
        SONAR_SCANNER_HOME = tool(name: 'SonarQubeScanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation')
        SONARQUBE_TOKEN = credentials('SonarQube-Token') // Use the ID you provided for the token
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/raj-dhamdhere/HealthExpress.git', credentialsId: 'github-token'
            }
        }

        stage('Install Dependencies') {
            steps {
                // echo 'Installing pm2 globally...'
                // bat 'npm install -g pm2' // Install pm2 globally

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

        stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = SONAR_SCANNER_HOME
                    bat """
                    ${scannerHome}/bin/sonar-scanner.bat ^
                    -Dsonar.projectKey=HealthExpress ^
                    -Dsonar.sources=. ^
                    -Dsonar.exclusions=node_modules/**,build/** ^
                    -Dsonar.host.url=http://ec2-18-202-48-70.eu-west-1.compute.amazonaws.com:9000 ^
                    -Dsonar.login=${SONARQUBE_TOKEN}  
                    """
                }
            }
        }

        stage('Clean PM2 Processes') {
            steps {
                echo 'Deleting all existing PM2 processes...'
                bat 'pm2 delete all' // Delete all PM2 processes, ignore errors if there are no processes running
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

        stage('Deploy Front End with Pm2') {
            steps {
                script {
                    echo 'Serving frontend with PM2 on port 3000...'

                    // Ensure the target directory exists
                    bat '''
                    if not exist C:\\frontend (
                        mkdir C:\\frontend
                    )
                    '''

                    // Copy the build files from frontend to the target directory
                    bat 'xcopy client\\build C:\\frontend /E /Y'

                    // Serve the frontend with PM2
                    bat 'pm2 serve C:\\frontend --name "app-frontend" --spa --port 3000'
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
