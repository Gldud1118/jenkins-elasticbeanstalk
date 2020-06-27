pipeline {
    agent any
    stages {
        stage('Zip') {
            steps {
                echo 'Zipping the application'
                sh 'cd /var/lib/jenkins/workspace/my-pipeline_master'
                sh 'zip -r my-pipeline_master.zip ./* .ebextensions'
                
            }
        }
        stage('Test') {
            steps {
                echo 'Testing'
            }
        }
        
        stage('Upload S3') {
            steps {
                echo 'Uploading'
                sh 'aws s3 cp /var/lib/jenkins/workspace/my-pipeline_master/my-pipeline_master.zip s3://aws-beanstalk-deploy/${PROJECT_NAME}-${GIT_BRANCH}-${BUILD_NUMBER}.war --acl public-read-write --region ap-northeast-2'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying'
                sh 'aws elasticbeanstalk create-application-version --region ap-northeast-2 --application-name jenkins-test --version-label ${PROJECT_NAME}-${BUILD_NUMBER} --description ${BUILD_TAG} --source-bundle S3Bucket="aws-beanstalk-deploy",S3Key="${PROJECT_NAME}-${GIT_BRANCH}-${BUILD_NUMBER}.war"' 
                sh 'aws elasticbeanstalk update-environment --region ap-northeast-2 --environment-name JenkinsTest-env --version-label ${PROJECT_NAME}-${BUILD_NUMBER}'
            }
        }
    }
}
