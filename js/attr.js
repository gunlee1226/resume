$("document").ready(function() {
  // mouse_pointer 클래스 속성 추가
  $(".mouse_pointer").attr(
    "data-toggle",
    "tooltip",
    "data-placement",
    "bottom"
  );
  // Progress bar 색 변경
  $(".progress-bar").addClass("bg-success");
  // Progress bar 속성 추가
  $(".progress-bar").attr(
    "role",
    "progressbar",
    "aria-valuenow",
    "0",
    "aria-valuemin",
    "0",
    "aria-valuemax",
    "100"
  );

  // tooltip Title
  $("#toolHtml").attr(
    "title",
    "HTML5 웹표준을 준수한 기본적인 모바일 페이지, 웹페이지 제작 가능"
  );
  $("#toolCordova").attr(
    "title",
    "Cordova Framework를 이용한 Hybrid App 개발 가능" +
      "geolocation 플러그인을 이용하여 해당 디바이스의 위도 경도 확인가능" +
      "flashlight 플러그인을 이용하여 플래쉬 기능 사용가능" +
      "device-motion 플러그인을 이용하여 해당 디바이스의 방위 확인 가능" +
      "camera 플러그인을 이용하여 카메라 기능 사용가능" +
      "device-orientation, device-motion 플러그인을 이용하여 해당 디바이스의 x,y,z축 확인가능"
  );
  $("#toolCss").attr("title", "CSS3 및 부트스트랩을 이용하여 스타일 입히기");
  $("#toolJS").attr(
    "title",
    "기초적인 웹 어플리케이션 제작 가능" +
      "기초적인 유효성 검사 툴 제작 가능" +
      "Ajax-Json 을 이용한 페이지 제작 가능"
  );
  $("#toolJSP").attr("title", "JAVA, JSP를 이용한 프로젝트 진행 가능");
});
