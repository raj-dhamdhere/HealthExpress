pipeline {
    agent any

    environment {
        NODE_HOME = '/usr/local/bin/'
        PATH = "${NODE_HOME}:${env.PATH}"
    }

    options {
        timeout(time: 30, unit: 'MINUTES')  // Sets a maximum time for the entire pipeline
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
                    sh 'ls -la'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                cache(path: './Backend/node_modules', key: 'npm-backend') {  // Cache backend dependencies
                    dir('Backend') {
                        echo 'Installing backend dependencies...'
                        sh 'npm install --quiet'  // Reduced verbosity
                    }
                }

                cache(path: './client/node_modules', key: 'npm-client') {  // Cache frontend dependencies
                    dir('client') {
                        echo 'Installing frontend dependencies...'
                        sh 'npm install --quiet'  // Reduced verbosity
                    }
                }
            }
        }

        stage('Build') {
            steps {
                dir('client') {
                    echo 'Building frontend...'
                    timeout(time: 15, unit: 'MINUTES') {  // Adds a timeout to the build step
                        sh 'npm run build --quiet'  // Reduced verbosity
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                dir('Backend') {
                    echo 'Starting backend server with pm2...'
                    sh 'pm2 start index.js --name "app-backend" || node index.js'
                }
                dir('client') {
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
