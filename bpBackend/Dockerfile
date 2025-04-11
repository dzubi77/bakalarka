FROM openjdk:22-jdk-slim
WORKDIR /app
COPY out/artifacts/bpBackend_jar/bpBackend.jar backend_bp.jar
EXPOSE 8080
CMD ["java", "-jar", "backend_bp.jar"]