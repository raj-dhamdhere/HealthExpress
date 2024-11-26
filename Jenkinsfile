pipeline {
    agent any

    environment {
        NODE_HOME = 'C:\\Program Files\\nodejs'
        NPM_GLOBAL = 'C:\\Users\\Administrator\\AppData\\Roaming\\npm'
        BACKEND_NODE_BIN = 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\NodeJS-Pipeline\\Backend\\node_modules\\.bin'
        HOMEPATH = 'C:\\Users\\Administrator'
        PATH = "${NODE_HOME};${NPM_GLOBAL};${BACKEND_NODE_BIN};${env.PATH}"
        AWS_ACCESS_KEY_ID = credentials('AWS_ACCESS_KEY_ID')  // AWS Credentials stored in Jenkins
        AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')  // AWS Credentials stored in Jenkins
        S3_BUCKET_NAME = '23122498frontendhealthexpress'  // Replace with your S3 bucket name
        REGION = 'eu-west-1'  // Set your AWS region (adjust if necessary)
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
                bat 'npm install -g pm2' // Install pm2 globally

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

        stage('Test AWS Credentials') {
            steps {
                bat 'aws s3 ls --region $REGION'
            }
        }    

        stage('Deploy Frontend to S3') {
            steps {
                script {
                    echo 'Uploading frontend build to S3...'

                    // Use AWS CLI to sync the build folder to the S3 bucket
                    bat '''
                    aws s3 sync client\\build s3://$S3_BUCKET_NAME/ --region $REGION --delete
                    '''

                    // Optional: Set cache-control headers for the uploaded assets for better performance
                    bat '''
                    aws s3 cp client\\build\\index.html s3://$S3_BUCKET_NAME/index.html --region $REGION --cache-control "no-cache, no-store, must-revalidate"
                    aws s3 cp client\\build\\assets s3://$S3_BUCKET_NAME/assets/ --recursive --region $REGION --cache-control "public, max-age=31536000"
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
