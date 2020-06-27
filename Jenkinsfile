pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
              echo 'executing npm...'
              nodejs('Node-14.4')
                sh 'npm install' 
                sh 'npm build'
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
                sh 'aws s3 cp /var/lib/jenkins/workspace/my-pipeline/target/my-pipeline.war s3://aws-beanstalk-deploy/${JOB_NAME}-${GIT_BRANCH}-${BUILD_NUMBER}.war --acl public-read-write --region ap-northeast-2'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying'
                sh 'aws elasticbeanstalk create-application-version --region ap-northeast-2 --application-name jenkins-test --version-label ${JOB_NAME}-${BUILD_NUMBER} --description ${BUILD_TAG} --source-bundle S3Bucket="aws-beanstalk-deploy",S3Key="${JOB_NAME}-${GIT_BRANCH}-${BUILD_NUMBER}.war"' 
                sh 'aws elasticbeanstalk update-environment --region ap-northeast-2 --environment-name JenkinsTest-env --version-label ${JOB_NAME}-${BUILD_NUMBER}'
            }
        }
    }
}
