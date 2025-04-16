FROM openjdk:22-jdk-slim
WORKDIR /app
COPY out/artifacts/bpBackend_jar/bpBackend.jar BE.jar
EXPOSE 8080
CMD ["java", "-jar", "BE.jar"]
