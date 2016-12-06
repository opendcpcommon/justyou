FROM registry.api.weibo.com/weibo_rd_common/base_tomcat:tomcat8.0.30_jdk8u65_withImageMagic

ENV CATALINA_HEAP -Xmx64m -Xms64m -Xmn64m -Xss1m -DServer=just-you

ENV CATALINA_HTTP_PORT 8080
ENV CATALINA_SHUTDOWN_PORT 8005
ADD web /data1/weibo/webapps/ROOT

EXPOSE 8080 8005
ENTRYPOINT exec /data1/weibo/bin/catalina.sh run