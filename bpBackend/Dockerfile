# Stage 1: Build the app
FROM maven:3.9.9-openjdk-22 AS build
WORKDIR /app

# Copy the pom.xml and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the source code
COPY . .

# Build the jar
RUN mvn clean package -DskipTests

# Stage 2: Run the app
FROM openjdk:22-jdk-slim
WORKDIR /app
COPY --from=build /app/target/*.jar backend_bp.jar
EXPOSE 8080
CMD ["java", "-jar", "backend_bp.jar"]
