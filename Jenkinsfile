pipeline {
	agent any
	tools {
		nodejs 'NodeJS'
	}
	stages {
		stage('Checkout Github'){
			steps {
			git branch: 'main', credentialsId: 'GitOps-token-GitHub', url: 'https://github.com/iQuantC/Jenkins-ArgoCD-GitOps.git'
			}
		}		
		stage('Install node dependencies'){
			steps {
				sh 'npm install'
			}
		}
		stage('Build Docker Image'){
			steps {
				script {
					echo 'building docker image...'
				}
			}
		}
		stage('Trivy Scan'){
			steps {
				sh '''
				echo 'scanning docker image with Trivy...'
				'''
			}
		}
		stage('Push Image to DockerHub'){
			steps {
				script {
					echo 'pushing docker image to DockerHub...'
					}
				}
			}
		stage('Install ArgoCD CLI'){
			steps {
				sh '''
				echo 'installing ArgoCD cli...'
				'''
			}
		}
		stage('Apply Kubernetes Manifests & Sync App with ArgoCD'){
			steps {
				script {
					sh '''
					echo 'synchronizing app with ArgoCD...'
					'''
					}
				}
			}
		}

	post {
		success {
			echo 'Build&Deploy completed succesfully!'
		}
		failure {
			echo 'Build&Deploy failed. Check logs.'
		}
	}
}
