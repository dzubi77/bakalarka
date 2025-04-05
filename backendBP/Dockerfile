FROM openjdk:22-jdk-slim
WORKDIR /app
COPY out/artifacts/backend_bp_jar/backend_bp.jar backend_bp.jar
EXPOSE 8080
CMD ["java", "-jar", "backend_bp.jar"]