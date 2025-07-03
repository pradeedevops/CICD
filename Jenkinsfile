pipeline {
    agent any
    tools {
            nodejs 'NodeJS'
    } 
    environment {
            DOCKER_HUB_REPO = 'pradeepaanandh/trial'
    }
    stages {
        stage('Checkout Github') {
            steps {
            git branch: 'main', credentialsId: 'GitOps-token-GitHub', url: 'https://github.com/pradeedevops/CICD.git'
            }
        }

        stage('Install node dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo 'building docker image...'
                    docker.build("${DOCKER_HUB_REPO}:latest")
                }
            }
        }

        stage('Trivy Scan') {
            steps {
                sh '''
                    echo 'scanning docker image with trivy...'
                '''
            }
        }

        stage('Push Image to DockerHub') {
            steps {
                script {
                    echo 'pushing docker image to DockerHub...'
                }
            }
        }

        stage('Install Kubectl & ArgoCD CLI') {
            steps {
                sh '''
                    echo 'installing Kubectl & ArgoCD cli...'
                '''
            }
        }

        stage('Apply Kubernetes Manifests & Sync App with ArgoCD') {
            steps {
                script {
                    sh '''
                        echo "synchronizing app with ArgoCD..."
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Build & Deploy completed successfully!'
        }
        failure {
            echo 'Build & Deploy failed. Check logs.'
        }
    }
}
