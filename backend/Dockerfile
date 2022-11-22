FROM openjdk:11
VOLUME /tmp
EXPOSE 8090
ADD ./target/mangiabene-0.0.1-SNAPSHOT.jar mangiabene.jar
ENTRYPOINT ["java","-jar","/mangiabene.jar"]