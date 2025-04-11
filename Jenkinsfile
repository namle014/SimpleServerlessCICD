pipeline {
    agent any

    tools { 
        nodejs 'NODEJS'
    }

    environment {
        DEPLOY_DIR = "/var/www/simpleCICD"
        PORT = "3000"
    }

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/bichngoc55/SimpleCICD.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                  # Create deployment directory if it doesn't exist
                  sudo mkdir -p ${DEPLOY_DIR}

                  # Copy project files to deployment directory
                  sudo rsync -av --exclude="node_modules" --exclude=".git" . ${DEPLOY_DIR}/

                  # Change directory to deployment folder
                  cd ${DEPLOY_DIR}

                  # Install dependencies on the server
                  npm install

                  # Restart the application (using pm2)
                  pm2 delete simpleCICD || true
                  pm2 start server.js --name simpleCICD
                  pm2 save
                '''
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed.'
        }
    }
}