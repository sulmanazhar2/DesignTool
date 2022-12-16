// Declaring some variables and objects
$(window).resize(resizecheck);
var imgElement;
var objectArray = new Array();
var canvas = new fabric.Canvas("tcanvas");
var valueSelect = $("#tshirttype").val();
var zoomer = document.getElementById("zoomer");
var theInput = document.getElementById("productCustomColor");
var fontColor = document.getElementById("text-fontcolor");
var pathcolorid = document.getElementById("pathcolorid");
var pathstrokecolorid = document.getElementById("pathstrokecolor");
var pathstrokewidth = document.getElementById("pathstrokewidth");
var fontBorderColor = document.getElementById("text-strokecolor");
var textButton = document.getElementById("add-text");
var sidecheck = 0;
var sidebarCheck;
var backcheck;
var imgElement;
var drawingMode = 0;
var a, b;
var theColor = theInput.value;
var svgFolder = "img/svg/";
var productImagesFolder = "img/";
var Direction = {
  LEFT: 0,
  UP: 1,
  RIGHT: 2,
  DOWN: 3,
};

$(document).ready(function () {
  $("#tcanvas").css("background-color", "white");

  // Initializing some basic canvas settings

  canvas.preserveObjectStacking = true;
  canvas.controlsAboveOverlay = true;
  backgrounddraw();
  canvas.on({
    "object:moving": function (e) {
      e.target.opacity = 0.9;
    },
    "object:modified": function (e) {
      e.target.opacity = 1.0;
    },

    "object:selected": onObjectSelected,
    "selection:cleared": onSelectedCleared,
    "selection:updated": onObjectSelected,
  });

  // Making custom controls

  fabric.Object.prototype.set({
    transparentCorners: false,
    padding: 10,
  });
  fabric.Canvas.prototype.customiseControls(
    {
      tl: {
        action: "rotate",
        cursor: "crosshair",
      },
      tr: {
        action: "scale",
      },
      bl: {
        action: "remove",
        cursor: "pointer",
      },
      br: {
        action: "moveUp",
        cursor: "pointer",
      },
      mb: {
        action: "moveDown",
        cursor: "pointer",
      },

      mtr: {
        action: "drag",
        cursor: "-webkit-grab",
        cursor: "grab",
      },
    },
    function () {
      canvas.renderAll();
    }
  );
  fabric.Object.prototype.customiseCornerIcons(
    {
      settings: {
        borderColor: "black",
        cornerSize: 25,
        cornerShape: "circle",
        cornerBackgroundColor: "black",
        cornerPadding: 10,
      },
      tl: {
        icon: "icons/rotate.svg",
      },
      tr: {
        icon: "icons/resize.svg",
      },
      bl: {
        icon: "icons/remove.svg",
      },
      br: {
        icon: "icons/up.svg",
      },
      mb: {
        icon: "icons/down.svg",
      },
    },
    function () {
      canvas.renderAll();
    }
  );

  // Product type change

  $("#tshirttype").on("change", function () {
    valueSelect = $(this).val();
  });
  $("#tshirttype").on("change", function () {
    $("img[name=tshirtview]").attr("src", $(this).val());
    if (backcheck) {
      var flip = document.getElementById("flip");
      setTimeout(function () {
        flip.click();
      }, 100);
    }

    backgrounddraw();
  });
  $(".image-picker").imagepicker({
    clicked: function () {
      $(
        '#tshirttype option[value="' +
          $(this)
            .find("option[value='" + $(this).val() + "']")
            .data("img-src") +
          '"]'
      ).prop("selected", "selected");
      $("#tshirttype").trigger("change");
      $("#myModal").modal("toggle");
    },
  });

  // Flipping product

  $("#flip").click(function () {
    if (valueSelect === "img/crew_front.png") {
      if ($(this).attr("data-original-title") == "Show Front View") {
        $(this).attr("data-original-title", "Show Back View");
        backcheck = false;
        $("#tshirtFacing").attr("src", "img/crew_front.png");
        canvas.overlayImage = null;
        b = JSON.stringify(canvas);
        backgrounddraw();
        canvas.clear();
        try {
          var json = JSON.parse(a);
          canvas.loadFromJSON(a);
          backgrounddraw();
        } catch (e) {}
      } else {
        backcheck = true;
        $(this).attr("data-original-title", "Show Front View");
        $("#tshirtFacing").attr("src", "img/crew_back.png");
        canvas.overlayImage = null;
        a = JSON.stringify(canvas);
        backgrounddraw();
        canvas.clear();
        try {
          var json = JSON.parse(b);
          canvas.loadFromJSON(b);
          backgrounddraw();
        } catch (e) {}
      }
    } else if (valueSelect === "img/mens_longsleeve_front.png") {
      if ($(this).attr("data-original-title") == "Show Front View") {
        $(this).attr("data-original-title", "Show Back View");
        backcheck = false;
        $("#tshirtFacing").attr("src", "img/mens_longsleeve_front.png");
        canvas.overlayImage = null;
        b = JSON.stringify(canvas);
        backgrounddraw();
        canvas.clear();
        try {
          var json = JSON.parse(a);
          canvas.loadFromJSON(a);
          backgrounddraw();
        } catch (e) {}
      } else {
        backcheck = true;
        $(this).attr("data-original-title", "Show Front View");
        $("#tshirtFacing").attr("src", "img/mens_longsleeve_back.png");
        canvas.overlayImage = null;
        a = JSON.stringify(canvas);
        backgrounddraw();
        canvas.clear();
        try {
          var json = JSON.parse(b);
          canvas.loadFromJSON(b);
          backgrounddraw();
        } catch (e) {}
      }
    } else if (valueSelect === "img/mens_tank_front.png") {
      if ($(this).attr("data-original-title") == "Show Front View") {
        $(this).attr("data-original-title", "Show Back View");
        backcheck = false;
        $("#tshirtFacing").attr("src", "img/mens_tank_front.png");
        canvas.overlayImage = null;
        b = JSON.stringify(canvas);
        backgrounddraw();
        canvas.clear();
        try {
          var json = JSON.parse(a);
          canvas.loadFromJSON(a);
          backgrounddraw();
        } catch (e) {}
      } else {
        backcheck = true;
        $(this).attr("data-original-title", "Show Front View");
        $("#tshirtFacing").attr("src", "img/mens_tank_back.png");
        canvas.overlayImage = null;
        a = JSON.stringify(canvas);
        backgrounddraw();
        canvas.clear();
        try {
          var json = JSON.parse(b);
          canvas.loadFromJSON(b);
          backgrounddraw();
        } catch (e) {}
      }
    } else if (valueSelect === "img/mens_hoodie_front.png") {
      if ($(this).attr("data-original-title") == "Show Front View") {
        $(this).attr("data-original-title", "Show Back View");
        backcheck = false;
        $("#tshirtFacing").attr("src", "img/mens_hoodie_front.png");
        canvas.overlayImage = null;
        b = JSON.stringify(canvas);
        backgrounddraw();
        canvas.clear();
        try {
          var json = JSON.parse(a);
          canvas.loadFromJSON(a);
          backgrounddraw();
        } catch (e) {}
      } else {
        backcheck = true;
        $(this).attr("data-original-title", "Show Front View");
        $("#tshirtFacing").attr("src", "img/mens_hoodie_back.png");
        canvas.overlayImage = null;
        a = JSON.stringify(canvas);
        backgrounddraw();
        canvas.clear();
        try {
          var json = JSON.parse(b);
          canvas.loadFromJSON(b);
          backgrounddraw();
        } catch (e) {}
      }
    } else if (valueSelect === "img/womens_crew_front.png") {
      if ($(this).attr("data-original-title") == "Show Front View") {
        $(this).attr("data-original-title", "Show Back View");
        backcheck = false;
        $("#tshirtFacing").attr("src", "img/womens_crew_front.png");
        canvas.overlayImage = null;
        b = JSON.stringify(canvas);
        backgrounddraw();
        canvas.clear();
        try {
          var json = JSON.parse(a);
          canvas.loadFromJSON(a);
          backgrounddraw();
        } catch (e) {}
      } else {
        backcheck = true;
        $(this).attr("data-original-title", "Show Front View");
        $("#tshirtFacing").attr("src", "img/womens_crew_back.png");
        canvas.overlayImage = null;
        a = JSON.stringify(canvas);
        backgrounddraw();
        canvas.clear();
        try {
          var json = JSON.parse(b);
          canvas.loadFromJSON(b);
          backgrounddraw();
        } catch (e) {}
      }
    }

    backgroundcolordraw($("#productCustomColor").val());

    canvas.renderAll();
    setTimeout(function () {
      canvas.calcOffset();
    }, 200);

    setTimeout(function () {
      deleteListLayers();
    }, 500);
    setTimeout(function () {
      jsonLayers2();
    }, 500);
  });

  // Changing backgrorund of canvas

  $(".color-preview").click(function () {
    var color = $(this).css("background-color");
    //                $("#tcanvas").css('background-color', color);
    $("#productCustomColor").val(colorToHex(color));
    backgroundcolordraw(colorToHex(color));
  });
  theInput.addEventListener(
    "input",
    function () {
      backgroundcolordraw(theInput.value);
    },
    false
  );

  // Making image objects

  $(document).on("click", ".img-polaroid", function (e) {
    var el = e.target;

    var left = fabric.util.getRandomInt(350, 550);
    var top = fabric.util.getRandomInt(50, 400);
    var oImg;

    fabric.Image.fromURL(el.src, function (image) {
      oImg = image
        .set({
          left: left,
          top: top,
          angle: 0,
        })
        .scale(0.4);
      canvas.setActiveObject(oImg);
      canvas.add(oImg).renderAll();
      objectArray.push(oImg);
    });
    var id = canvas.getObjects().length;

    $("#layerUI").prepend(
      '<li draggable="true" id="' +
        id +
        '" class="layersList"><img class="layersimg" src="' +
        el.src +
        '"><span class="layerstxt" title="Layer ' +
        (id + 1) +
        '">Layer ' +
        (id + 1) +
        '</span><span class="layersfunc"><i class="layers-icon-close fa fa-times" title="Delete layer" data-act="delete" onclick="delete_objects(' +
        id +
        ')"></i></span></li>'
    );
    $("#" + id).click(function (evt) {
      if ($(this).hasClass("actived")) {
        // remove active state of all layers and objects
        $("li").removeClass("actived");
        canvas.discardActiveObject();
        canvas.renderAll();
      } else {
        // remove active state of all layers and objects
        $("li").removeClass("actived");
        canvas.discardActiveObject();
        canvas.renderAll();
        // activate layer and object
        $(this).addClass("actived");

        var obj = canvas.item(id);
        canvas.setActiveObject(obj);
        canvas.renderAll();
      }
    });
    $("li").removeClass("actived");
    $("#" + id).addClass("actived");
  });

  //To add text in canvas

  document.getElementById("add-text").onclick = function () {
    var offset = 50;
    var text = $("#text-string").val();
    var textSample = new fabric.Text(text, {
      left: fabric.util.getRandomInt(200 + offset, 200 - offset),
      top: fabric.util.getRandomInt(110 + offset, 400 - offset),
      fontFamily: "helvetica",
      fontSize: 280,
      angle: 0,
      fill: "#000000",
      scaleX: 0.5,
      scaleY: 0.5,
      fontWeight: "",
    });
    canvas.add(textSample);
    canvas.item(canvas.item.length - 1).hasRotatingPoint = true;

    deleteListLayers();
    jsonLayers2();
  };

  $(".sample-text span").click(function (e) {
    var offset = 50;
    var text = e.currentTarget.innerText;
    var textSample = new fabric.Text(text, {
      left: fabric.util.getRandomInt(500 + offset, 400 - offset),
      top: fabric.util.getRandomInt(110 + offset, 400 - offset),
      fontFamily: $(this).attr("name"),
      fontSize: 80,
      angle: 0,
      fill: "#000000",
      scaleX: 0.5,
      scaleY: 0.5,
      fontWeight: "",
    });
    canvas.add(textSample);
    canvas.item(canvas.item.length - 1).hasRotatingPoint = true;

    deleteListLayers();
    jsonLayers2();
  });

  $("#text-string").keyup(function () {
    var activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "text") {
      activeObject.text = this.value;
      canvas.renderAll();
    }
  });

  // For Shapes
  $(document).on("click", "#svg-shapes", function (e) {
    console.log(e.target.currentSrc);
    $(function () {
      var group = [];
      var colorSet = "#00FFFF";
      fabric.loadSVGFromURL(e.target.currentSrc, function (objects, options) {
        var svgData = fabric.util.groupSVGElements(objects, options);

        var left = fabric.util.getRandomInt(350, 550);
        var top = fabric.util.getRandomInt(50, 400);
        svgData.top = top;
        svgData.left = left;
        svgData.scaleToWidth(100);
        svgData.scaleToHeight(100);
        //                svgData.set('fill', '#43d3f3');
        //                svgData.set('stroke', '#f343d8');
        svgData.set("strokeWidth", 0);
        canvas.add(svgData);
        canvas.renderAll();
      });
    });
  });

  pathcolorid.addEventListener("input", function (e) {
    var activeObject = canvas.getActiveObject();

    if (activeObject && activeObject.type === "path") {
      activeObject.set("fill", this.value);
      canvas.renderAll();
    }
  });
  pathstrokecolorid.addEventListener("input", function (e) {
    var activeObject = canvas.getActiveObject();

    if (activeObject && activeObject.type === "path") {
      activeObject.set("stroke", this.value);
      canvas.renderAll();
    }
  });
  pathstrokewidth.addEventListener("input", function (e) {
    var activeObject = canvas.getActiveObject();

    if (activeObject && activeObject.type === "path") {
      activeObject.set("strokeWidth", this.value);
      canvas.renderAll();
    }
  });

  document.getElementById("remove-selected").onclick = function () {
    delete_objects();
  };
  document.addEventListener(
    "keydown",
    function (e) {
      var keyCode = e.keyCode;

      if (keyCode == 13) {
        if (document.getElementById("texttab").style.display == "block") {
          textButton.click();
        }
      }
    },
    false
  );
  document.addEventListener(
    "keydown",
    function (e) {
      var keyCode = e.keyCode;

      if (keyCode == 46) {
        delete_objects();
      }
    },
    false
  );
  document.addEventListener(
    "keydown",
    function (e) {
      var keyCode = e.keyCode;

      if (keyCode == 27) {
        var drawingModeEl = document.getElementById("drawing-mode");
        var drawingOptionsEl = document.getElementById("drawing-mode-options");
        canvas.isDrawingMode = false;
        drawingModeEl.style.display = "none";
        drawingOptionsEl.style.display = "none";
        tabSelect(null, "layerstab");
        deleteListLayers();
        jsonLayers2();
      }
    },
    false
  );
  document.addEventListener("keyup", ({ keyCode, ctrlKey } = event) => {
    // Check Ctrl key is pressed.
    if (!ctrlKey) {
      return;
    }
    //                console.log(canvas.getObjects());
    if (canvas.getObjects() != []) {
      // Check pressed button is Z - Ctrl+Z.
      if (keyCode === 90) {
        canvas.undo();
        backgrounddraw();
      }

      // Check pressed button is Y - Ctrl+Y.
      if (keyCode === 89) {
        canvas.redo();
        backgrounddraw();
      }
    } else {
      //                    canvas.clearHistory();
    }
  });
  document.getElementById("bring-to-front").onclick = function () {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      activeObject.bringToFront();
    }
    setTimeout(function () {
      deleteListLayers();
    }, 500);
    setTimeout(function () {
      jsonLayers2();
    }, 500);
  };
  document.getElementById("send-to-back").onclick = function () {
    var activeObject = canvas.getActiveObject();
    if (activeObject) {
      activeObject.sendToBack();
    }
    setTimeout(function () {
      deleteListLayers();
    }, 100);
    setTimeout(function () {
      jsonLayers2();
    }, 100);
  };

  // For Manually Moving Objects using arrows keys or buttons

  fabric.util.addListener(document.body, "keydown", function (options) {
    if (options.repeat) {
      return;
    }
    var key = options.which || options.keyCode; // key detection
    if (key === 37) {
      // handle Left key
      moveSelected(Direction.LEFT);
    } else if (key === 38) {
      // handle Up key
      moveSelected(Direction.UP);
    } else if (key === 39) {
      // handle Right key
      moveSelected(Direction.RIGHT);
    } else if (key === 40) {
      // handle Down key
      moveSelected(Direction.DOWN);
    }
  });
  $(".arrowUp").click(function (e) {
    moveSelected(Direction.UP);
  });
  $(".arrowLeft").click(function (e) {
    moveSelected(Direction.LEFT);
  });
  $(".arrowDown").click(function (e) {
    moveSelected(Direction.DOWN);
  });
  $(".arrowRight").click(function (e) {
    moveSelected(Direction.RIGHT);
  });

  $("#zoomer").on("change", function (e) {
    $("#shirtDiv").css("transform", "scale(" + zoomer.valueAsNumber + ")");
  });
  $("#text-bold").click(function () {
    var activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "text") {
      activeObject.fontWeight = activeObject.fontWeight == "bold" ? "" : "bold";
      canvas.renderAll();
    }
  });
  $("#text-italic").click(function () {
    var activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "text") {
      activeObject.fontStyle =
        activeObject.fontStyle == "italic" ? "" : "italic";
      canvas.renderAll();
    }
  });
  $("#text-strike").click(function () {
    var activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "text") {
      if (activeObject.linethrough == false) {
        activeObject.set("linethrough", true);
      } else {
        activeObject.set("linethrough", false);
      }

      canvas.renderAll();
    }
  });
  $("#text-underline").click(function () {
    var activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "text") {
      if (activeObject.underline === false) {
        activeObject.set("underline", true);
      } else {
        activeObject.set("underline", false);
      }

      canvas.renderAll();
    }
  });
  $("#text-left").click(function () {
    var activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "text") {
      activeObject.textAlign = "left";
      canvas.renderAll();
    }
  });
  $("#text-center").click(function () {
    var activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "text") {
      activeObject.textAlign = "center";
      canvas.renderAll();
    }
  });
  $("#text-right").click(function () {
    var activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "text") {
      activeObject.textAlign = "right";
      canvas.renderAll();
    }
  });
  $("#font-family").change(function () {
    var activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.type === "text") {
      activeObject.fontFamily = this.value;
      canvas.renderAll();
    }
  });

  fontColor.addEventListener("input", function () {
    var activeObject = canvas.getActiveObject();

    if (activeObject && activeObject.type === "text") {
      activeObject.set("fill", this.value);
      canvas.renderAll();
    }
  });
  fontBorderColor.addEventListener("input", function () {
    var activeObject = canvas.getActiveObject();

    if (activeObject && activeObject.type === "text") {
      activeObject.set("stroke", this.value);
      canvas.renderAll();
    }
  });

  // For layers

  $("#layerUI").sortable({
    axis: "y",
    stop: function (event, ui) {
      var s = canvas.getObjects();
      var start = ui.item.attr("id");
      sortListLayers();
      var end = ui.item.attr("id");
      canvas.moveTo(s[start], end);
      canvas.renderAll();
      deleteListLayers();
      jsonLayers2();
    },
  });
  $("#layerUI").disableSelection();

  $(".sidebar-collapser").on("click", function (e) {
    if (sidecheck == 0) {
      $(".tool-sidebar").css("display", "inline-block");
      $(".sidebar-collapser .fa-arrow-right").css("display", "none");
      $(".sidebar-collapser .fa-arrow-left").css("display", "block");
      sidecheck = 1;
    } else {
      $(".tool-sidebar").css("display", "none");
      $(".sidebar-collapser .fa-arrow-right").css("display", "block");
      $(".sidebar-collapser .fa-arrow-left").css("display", "none");
      sidecheck = 0;
    }
  });

  $("[data-trigger]").on("click", function () {
    var trigger_id = $(this).attr("data-trigger");
    $(trigger_id).toggleClass("show");
    $("body").toggleClass("offcanvas-active");
  });
  // close button
  $(".btn-close").click(function (e) {
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
  });

  $(".dropdown-menu").click(function (e) {
    e.stopPropagation();
  });

  $.ajax({
    url: svgFolder,
    success: function (data) {
      $(data)
        .find("a")
        .attr("href", function (i, val) {
          if (val.match(/\.(jpe?g|svg)$/)) {
            $(".svg-shapesDiv").append(
              "<img src='" +
                svgFolder +
                val +
                "' id='svg-shapes' loading='lazy'>"
            );
          }
        });
    },
  });
  $.ajax({
    url: productImagesFolder,
    success: function (data) {
      $(data)
        .find("a")
        .attr("href", function (i, val) {
          if (val.match(/\.(jpe?g|jpg)$/)) {
            $("#avatarlist").append(
              "<img style='cursor:pointer;' class='img-polaroid' src='" +
                productImagesFolder +
                val +
                "' loading='lazy'>"
            );
          }
        });
    },
  });
});

// For Clipping objects inside the product area

$(function () {
  canvas.clipTo = function (ctx) {
    ctx.strokeStyle = "#999999";
    ctx.beginPath();
    ctx.moveTo(221, 0);
    ctx.lineTo(749, 0);
    ctx.lineTo(749, 570);
    ctx.lineTo(221, 570);
    ctx.closePath();
    ctx.stroke();
  };
});

// For Drawing Tool

(function () {
  var $ = function (id) {
    return document.getElementById(id);
  };

  var drawingModeEl = $("drawing-mode"),
    drawingOptionsEl = $("drawing-mode-options"),
    drawingColorEl = $("drawing-color"),
    drawingShadowColorEl = $("drawing-shadow-color"),
    drawingLineWidthEl = $("drawing-line-width"),
    drawingShadowWidth = $("drawing-shadow-width"),
    drawingShadowOffset = $("drawing-shadow-offset"),
    clearEl = $("clear-canvas");

  drawingModeEl.onclick = function () {
    drawingModeToggle();
  };

  if (fabric.PatternBrush) {
    var vLinePatternBrush = new fabric.PatternBrush(canvas);
    vLinePatternBrush.getPatternSrc = function () {
      var patternCanvas = fabric.document.createElement("canvas");
      patternCanvas.width = patternCanvas.height = 10;
      var ctx = patternCanvas.getContext("2d");

      ctx.strokeStyle = this.color;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(0, 5);
      ctx.lineTo(10, 5);
      ctx.closePath();
      ctx.stroke();

      return patternCanvas;
    };

    var hLinePatternBrush = new fabric.PatternBrush(canvas);
    hLinePatternBrush.getPatternSrc = function () {
      var patternCanvas = fabric.document.createElement("canvas");
      patternCanvas.width = patternCanvas.height = 10;
      var ctx = patternCanvas.getContext("2d");

      ctx.strokeStyle = this.color;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(5, 0);
      ctx.lineTo(5, 10);
      ctx.closePath();
      ctx.stroke();

      return patternCanvas;
    };

    var squarePatternBrush = new fabric.PatternBrush(canvas);
    squarePatternBrush.getPatternSrc = function () {
      var squareWidth = 10,
        squareDistance = 2;

      var patternCanvas = fabric.document.createElement("canvas");
      patternCanvas.width = patternCanvas.height = squareWidth + squareDistance;
      var ctx = patternCanvas.getContext("2d");

      ctx.fillStyle = this.color;
      ctx.fillRect(0, 0, squareWidth, squareWidth);

      return patternCanvas;
    };

    var diamondPatternBrush = new fabric.PatternBrush(canvas);
    diamondPatternBrush.getPatternSrc = function () {
      var squareWidth = 10,
        squareDistance = 5;
      var patternCanvas = fabric.document.createElement("canvas");
      var rect = new fabric.Rect({
        width: squareWidth,
        height: squareWidth,
        angle: 45,
        fill: this.color,
      });

      var canvasWidth = rect.getBoundingRect().width;

      patternCanvas.width = patternCanvas.height = canvasWidth + squareDistance;
      rect.set({
        left: canvasWidth / 2,
        top: canvasWidth / 2,
      });

      var ctx = patternCanvas.getContext("2d");
      rect.render(ctx);

      return patternCanvas;
    };

    var img = new Image();
    img.src = "img/honey_im_subtle.png";

    var texturePatternBrush = new fabric.PatternBrush(canvas);
    texturePatternBrush.source = img;
  }

  $("drawing-mode-selector").onchange = function () {
    if (this.value === "hline") {
      canvas.freeDrawingBrush = vLinePatternBrush;
    } else if (this.value === "vline") {
      canvas.freeDrawingBrush = hLinePatternBrush;
    } else if (this.value === "square") {
      canvas.freeDrawingBrush = squarePatternBrush;
    } else if (this.value === "diamond") {
      canvas.freeDrawingBrush = diamondPatternBrush;
    } else if (this.value === "texture") {
      canvas.freeDrawingBrush = texturePatternBrush;
    } else {
      canvas.freeDrawingBrush = new fabric[this.value + "Brush"](canvas);
    }

    if (canvas.freeDrawingBrush) {
      canvas.freeDrawingBrush.color = drawingColorEl.value;
      canvas.freeDrawingBrush.width =
        parseInt(drawingLineWidthEl.value, 10) || 1;
      canvas.freeDrawingBrush.shadow = new fabric.Shadow({
        blur: parseInt(drawingShadowWidth.value, 10) || 0,
        offsetX: 0,
        offsetY: 0,
        affectStroke: true,
        color: drawingShadowColorEl.value,
      });
    }
  };

  drawingColorEl.onchange = function () {
    canvas.freeDrawingBrush.color = this.value;
  };
  drawingShadowColorEl.onchange = function () {
    canvas.freeDrawingBrush.shadow.color = this.value;
  };
  drawingLineWidthEl.onchange = function () {
    canvas.freeDrawingBrush.width = parseInt(this.value, 10) || 1;
    this.previousSibling.innerHTML = this.value;
  };
  drawingShadowWidth.onchange = function () {
    canvas.freeDrawingBrush.shadow.blur = parseInt(this.value, 10) || 0;
    this.previousSibling.innerHTML = this.value;
  };
  drawingShadowOffset.onchange = function () {
    canvas.freeDrawingBrush.shadow.offsetX = parseInt(this.value, 10) || 0;
    canvas.freeDrawingBrush.shadow.offsetY = parseInt(this.value, 10) || 0;
    this.previousSibling.innerHTML = this.value;
  };

  if (canvas.freeDrawingBrush) {
    canvas.freeDrawingBrush.color = drawingColorEl.value;
    canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
    canvas.freeDrawingBrush.shadow = new fabric.Shadow({
      blur: parseInt(drawingShadowWidth.value, 10) || 0,
      offsetX: 0,
      offsetY: 0,
      affectStroke: true,
      color: drawingShadowColorEl.value,
    });
  }
})();

// Filters For Objects

(function () {
  // manually initialize 2 filter backend to give ability to switch:

  var canvas2dBackend = new fabric.Canvas2dFilterBackend();

  fabric.filterBackend = fabric.initFilterBackend();
  fabric.Object.prototype.transparentCorners = false;
  var $ = function (id) {
    return document.getElementById(id);
  };

  function applyFilter(index, filter) {
    var obj = canvas.getActiveObject();
    obj.filters[index] = filter;
    var timeStart = +new Date();
    obj.applyFilters();
    var timeEnd = +new Date();
    var dimString =
      canvas.getActiveObject().width + " x " + canvas.getActiveObject().height;
    $("bench").innerHTML =
      dimString + "px " + parseFloat(timeEnd - timeStart) + "ms";
    canvas.renderAll();
  }

  function getFilter(index) {
    var obj = canvas.getActiveObject();
    return obj.filters[index];
  }

  function applyFilterValue(index, prop, value) {
    var obj = canvas.getActiveObject();
    if (obj.filters[index]) {
      obj.filters[index][prop] = value;
      var timeStart = +new Date();
      obj.applyFilters();
      var timeEnd = +new Date();
      var dimString =
        canvas.getActiveObject().width +
        " x " +
        canvas.getActiveObject().height;
      $("bench").innerHTML =
        dimString + "px " + parseFloat(timeEnd - timeStart) + "ms";
      canvas.renderAll();
    }
  }

  function activatingFilters() {
    if (canvas.getActiveObject().type == "image") {
      fabric.util
        .toArray(document.getElementsByClassName("FilterClass"))
        .forEach(function (el) {
          el.disabled = false;
        });

      var filters = [
        "grayscale",
        "invert",
        "remove-color",
        "sepia",
        "brownie",
        "brightness",
        "contrast",
        "saturation",
        "noise",
        "vintage",
        "pixelate",
        "blur",
        "sharpen",
        "emboss",
        "technicolor",
        "polaroid",
        "blend-color",
        "gamma",
        "kodachrome",
        "blackwhite",
        "blend-image",
        "resize",
      ];

      for (var i = 0; i < filters.length; i++) {
        $(filters[i]) &&
          ($(filters[i]).checked = !!canvas.getActiveObject().filters[i]);
      }
    } else {
      deactivatingFilters();
    }
  }

  function deactivatingFilters() {
    fabric.util
      .toArray(document.getElementsByClassName("FilterClass"))
      .forEach(function (el) {
        el.disabled = true;
      });
  }
  fabric.Object.prototype.padding = 5;
  fabric.Object.prototype.transparentCorners = false;

  var f = fabric.Image.filters;

  canvas.on({
    "selection:created": function () {
      activatingFilters();
    },
    "selection:cleared": function () {
      deactivatingFilters();
    },
    "selection:updated": function () {
      activatingFilters();
    },
  });

  var indexF;

  $("brownie").onclick = function () {
    applyFilter(4, this.checked && new f.Brownie());
  };
  $("vintage").onclick = function () {
    applyFilter(9, this.checked && new f.Vintage());
  };
  $("technicolor").onclick = function () {
    applyFilter(14, this.checked && new f.Technicolor());
  };
  $("polaroid").onclick = function () {
    applyFilter(15, this.checked && new f.Polaroid());
  };
  $("kodachrome").onclick = function () {
    applyFilter(18, this.checked && new f.Kodachrome());
  };
  $("blackwhite").onclick = function () {
    applyFilter(19, this.checked && new f.BlackWhite());
  };
  $("grayscale").onclick = function () {
    applyFilter(0, this.checked && new f.Grayscale());
  };
  $("average").onclick = function () {
    applyFilterValue(0, "mode", "average");
  };
  $("luminosity").onclick = function () {
    applyFilterValue(0, "mode", "luminosity");
  };
  $("lightness").onclick = function () {
    applyFilterValue(0, "mode", "lightness");
  };
  $("invert").onclick = function () {
    applyFilter(1, this.checked && new f.Invert());
  };
  $("remove-color").onclick = function () {
    applyFilter(
      2,
      this.checked &&
        new f.RemoveColor({
          distance: $("remove-color-distance").value,
          color: $("remove-color-color").value,
        })
    );
  };
  $("remove-color-color").onchange = function () {
    applyFilterValue(2, "color", this.value);
  };
  $("remove-color-distance").oninput = function () {
    applyFilterValue(2, "distance", this.value);
  };
  $("sepia").onclick = function () {
    applyFilter(3, this.checked && new f.Sepia());
  };
  $("brightness").onclick = function () {
    applyFilter(
      5,
      this.checked &&
        new f.Brightness({
          brightness: parseFloat($("brightness-value").value),
        })
    );
  };
  $("brightness-value").oninput = function () {
    applyFilterValue(5, "brightness", parseFloat(this.value));
  };
  $("gamma").onclick = function () {
    var v1 = parseFloat($("gamma-red").value);
    var v2 = parseFloat($("gamma-green").value);
    var v3 = parseFloat($("gamma-blue").value);
    applyFilter(
      17,
      this.checked &&
        new f.Gamma({
          gamma: [v1, v2, v3],
        })
    );
  };
  $("gamma-red").oninput = function () {
    var current = getFilter(17).gamma;
    current[0] = parseFloat(this.value);
    applyFilterValue(17, "gamma", current);
  };
  $("gamma-green").oninput = function () {
    var current = getFilter(17).gamma;
    current[1] = parseFloat(this.value);
    applyFilterValue(17, "gamma", current);
  };
  $("gamma-blue").oninput = function () {
    var current = getFilter(17).gamma;
    current[2] = parseFloat(this.value);
    applyFilterValue(17, "gamma", current);
  };
  $("contrast").onclick = function () {
    applyFilter(
      6,
      this.checked &&
        new f.Contrast({
          contrast: parseFloat($("contrast-value").value),
        })
    );
  };
  $("contrast-value").oninput = function () {
    applyFilterValue(6, "contrast", parseFloat(this.value));
  };
  $("saturation").onclick = function () {
    applyFilter(
      7,
      this.checked &&
        new f.Saturation({
          saturation: parseFloat($("saturation-value").value),
        })
    );
  };
  $("saturation-value").oninput = function () {
    applyFilterValue(7, "saturation", parseFloat(this.value));
  };
  $("noise").onclick = function () {
    applyFilter(
      8,
      this.checked &&
        new f.Noise({
          noise: parseInt($("noise-value").value, 10),
        })
    );
  };
  $("noise-value").oninput = function () {
    applyFilterValue(8, "noise", parseInt(this.value, 10));
  };
  $("pixelate").onclick = function () {
    applyFilter(
      10,
      this.checked &&
        new f.Pixelate({
          blocksize: parseInt($("pixelate-value").value, 10),
        })
    );
  };
  $("pixelate-value").oninput = function () {
    applyFilterValue(10, "blocksize", parseInt(this.value, 10));
  };
  $("blur").onclick = function () {
    applyFilter(
      11,
      this.checked &&
        new f.Blur({
          value: parseFloat($("blur-value").value),
        })
    );
  };
  $("blur-value").oninput = function () {
    applyFilterValue(11, "blur", parseFloat(this.value, 10));
  };
  $("sharpen").onclick = function () {
    applyFilter(
      12,
      this.checked &&
        new f.Convolute({
          matrix: [0, -1, 0, -1, 5, -1, 0, -1, 0],
        })
    );
  };
})();

// Drag Drop Image

$(function () {
  // preventing page from redirecting
  $("html").on("dragover", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("h1").text("Drag here");
  });

  $("html").on("drop", function (e) {
    e.preventDefault();
    e.stopPropagation();
  });

  // Drag enter
  $(".upload-area").on("dragenter", function (e) {
    e.stopPropagation();
    e.preventDefault();
    $("h1").text("Drop");
  });

  // Drag over
  $(".upload-area").on("dragover", function (e) {
    e.stopPropagation();
    e.preventDefault();
    $("h1").text("Drop");
  });

  // Drop
  $(".upload-area").on("drop", function (e) {
    e.stopPropagation();
    e.preventDefault();

    $("h1").text("Upload");

    var file = e.originalEvent.dataTransfer.files;
    var fd = new FormData();

    fd.append("file", file[0]);
    uploadData(fd);
  });

  // Open file selector on div click
  $("#uploadfile").click(function () {
    $("#file").click();
  });

  // file selected
  $("#file").change(function () {
    var fd = new FormData();

    var files = $("#file")[0].files[0];

    fd.append("file", files);

    uploadData(fd);
  });
});

// Functions used in this tool

function uploadData(formdata) {
  $.ajax({
    url: "upload.php",
    type: "post",
    data: formdata,
    contentType: false,
    processData: false,
    success: function (response) {
      $("#file").removeAttr("value");
      $("#avatarlist").prepend(response);
      $(".upload-area h1").text("Click or drop image here");
    },
  });
}

function drawingModeToggle() {
  var drawingModeEl = document.getElementById("drawing-mode");
  var drawingOptionsEl = document.getElementById("drawing-mode-options");
  canvas.isDrawingMode = !canvas.isDrawingMode;

  if (canvas.isDrawingMode) {
    drawingModeEl.style.display = "";
    drawingOptionsEl.style.display = "";
  } else {
    drawingModeEl.style.display = "none";
    drawingOptionsEl.style.display = "none";
    tabSelect(null, "layerstab");

    deleteListLayers();
    jsonLayers2();
  }
}

function colorToHex(color) {
  if (color.substr(0, 1) === "#") {
    return color;
  }
  var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);

  var red = parseInt(digits[2]);
  var green = parseInt(digits[3]);
  var blue = parseInt(digits[4]);

  var rgb = blue | (green << 8) | (red << 16);
  return digits[1] + "#" + rgb.toString(16).padStart(6, "0");
}

function clipTShirt(ctx) {
  imgElement = document.getElementById("tshirtFacing");
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  var x = 220,
    y = 0,
    w = imgElement.width,
    h = imgElement.height;
  ctx.moveTo(x, y);
  ctx.lineTo(x + w, y);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.lineTo(x, y);
  ctx.restore();
}

function backgrounddraw() {
  imgElement = document.getElementById("tshirtFacing");

  canvas.setHeight(570);
  canvas.setWidth(920);

  canvas.setOverlayImage(imgElement.src, canvas.renderAll.bind(canvas), {
    width: imgElement.width,
    height: imgElement.height,
    left: 220,
    top: 0,
    originX: "left",
    originY: "top",
  });
}

function backgroundcolordraw(color) {
  var rect = new fabric.Rect({
    fill: color,
    width: imgElement.width - 2,
    height: imgElement.height,
    left: 220,
    top: 0,
    originX: "left",
    originY: "top",
  });
  canvas.setBackgroundImage(rect, function () {
    canvas.requestRenderAll();
  });
}

function onObjectSelected(e) {
  var selectedObject = e.target;
  var a = canvas.getObjects().indexOf(canvas.getActiveObject());
  $("li").removeClass("actived");
  $("#" + a).addClass("actived");
  $("#text-string").val("");
  onSelectedCleared();
  selectedObject.hasRotatingPoint = false;
  if (selectedObject && selectedObject.type === "text") {
    //display text editor
    $("#texteditor").css("display", "inline-flex");
    //                $("#text-string").val(selectedObject.getText());
    $("#text-fontcolor").css("display", "inline-flex");
    //                $('#text-strokecolor').miniColors('value', selectedObject.strokeStyle);
    $("#imageeditor").css("display", "inline-flex");
    $(".arrows").css("display", "inline-block");
  } else if (selectedObject && selectedObject.type === "image") {
    //display image editor
    $("#imageeditor").css("display", "inline-flex");
    $("#imagefilters").css("display", "inline-flex");
    $(".arrows").css("display", "inline-block");
  } else if (selectedObject && selectedObject.type === "path") {
    //display image editor
    if (selectedObject.fill != null) {
      $("#pathFilters").css("display", "inline-block");
      $("#pathcolorid").val(selectedObject.fill);
      $(".pathStroke input[type=color]").val(selectedObject.stroke);
      $(".pathStroke input[type=range]").val(selectedObject.strokeWidth);
    }
    $("#imageeditor").css("display", "inline-flex");
    $(".arrows").css("display", "inline-block");
  }
}

function onSelectedCleared(e) {
  $("#pathFilters").css("display", "none");
  $("#texteditor").css("display", "none");
  $("#text-string").val("");
  $("#imageeditor").css("display", "none");
  $("#imagefilters").css("display", "none");
  $(".arrows").css("display", "none");
  $("li").removeClass("actived");
}

function moveSelected(direction) {
  var activeObject = canvas.getActiveObject();

  if (activeObject) {
    switch (direction) {
      case Direction.LEFT:
        canvas.getActiveObject().left -= 5;
        break;
      case Direction.UP:
        canvas.getActiveObject().top -= 5;
        break;
      case Direction.RIGHT:
        canvas.getActiveObject().left += 5;
        break;
      case Direction.DOWN:
        canvas.getActiveObject().top += 5;
        break;
    }
    activeObject.setCoords();
    canvas.renderAll();
  } else {
  }
}

function delete_objects(e) {
  if (e === undefined) {
    var a = canvas.getObjects().indexOf(canvas.getActiveObject());

    var o = canvas.getActiveObject();
    if (o._objects === undefined) {
      canvas.remove(canvas.getActiveObject());
      $("#" + a).remove();
    } else {
      o._objects.forEach(function (object) {
        var s;
        canvas.setActiveObject(object);
        s =
          canvas.getActiveObject() &&
          canvas.getObjects().indexOf(canvas.getActiveObject());
        $("#" + s).remove();
      });
      o._objects.forEach(function (object) {
        canvas.remove(object);
      });
    }
    sortListLayers();
    canvas.discardActiveObject();
    canvas.renderAll();
  } else {
    var s = canvas.getObjects();
    canvas.remove(s[e]);
    deleteListLayers();
    jsonLayers2();

    canvas.renderAll();
  }
}

function jsonLayers(e) {
  var b = canvas.getObjects();
  var l = canvas.getObjects().length - 1;

  for (l; l >= 0; l--) {
    $("#layerUI").append(
      '<li draggable="true" id="' +
        l +
        '" class="layersList"><img class="layersimg" src="' +
        b[l].src +
        '"><span class="layerstxt" title="Shape ' +
        (l + 1) +
        '">Shape ' +
        (l + 1) +
        '</span><span class="layersfunc"><i class="layers-icon-close fa fa-times" title="Delete layer" data-act="delete" onclick="delete_objects(' +
        l +
        ')"></i></span></li>'
    );
  }
}

function jsonLayers2() {
  var b = canvas.getObjects();
  var l = canvas.getObjects().length - 1;
  for (l; l >= 0; l--) {
    if (b[l].__proto__.type == "image") {
      $("#layerUI").append(
        '<li draggable="true" id="' +
          l +
          '" class="layersList"><img class="layersimg" src="' +
          b[l]._element.currentSrc +
          '"><span class="layerstxt" title="Image Layer">Layer ' +
          (l + 1) +
          '</span><span class="layersfunc"><i class="layers-icon-close fa fa-times" title="Delete layer" data-act="delete" onclick="delete_objects(' +
          l +
          ')"></i></span></li>'
      );
    } else if (b[l].__proto__.type == "text") {
      $("#layerUI").append(
        '<li draggable="true" id="' +
          l +
          '" class="layersList"><img class="layersimg" src="icons/text.svg"><span class="layerstxt" title="Text Layer">Layer ' +
          (l + 1) +
          '</span><span class="layersfunc"><i class="layers-icon-close fa fa-times" title="Delete layer" data-act="delete" onclick="delete_objects(' +
          l +
          ')"></i></span></li>'
      );
    } else {
      $("#layerUI").append(
        '<li draggable="true" id="' +
          l +
          '" class="layersList"><img class="layersimg" src="icons/artist.svg"><span class="layerstxt" title="Drawing Layer">Layer ' +
          (l + 1) +
          '</span><span class="layersfunc"><i class="layers-icon-close fa fa-times" title="Delete layer" data-act="delete" onclick="delete_objects(' +
          l +
          ')"></i></span></li>'
      );
    }
  }
}

function sortListLayers() {
  var b = canvas.getObjects().length - 1;
  $(".layersList").each(function () {
    if (b >= 0) {
      $(this).attr("id", b--);
    }
  });
}

function deleteListLayers() {
  $(".layersList").each(function () {
    $(".layersList").remove();
  });
}

function setFont(e, font) {
  $("#dropdownMenuLink")[0].innerText = e;
  var activeObject = canvas.getActiveObject();
  if (activeObject && activeObject.type === "text") {
    activeObject.set("fontFamily", font);
    canvas.renderAll();
  }
}

function print() {
  var node = document.getElementById("tcanvas");
  if ($("#tcanvas").css("backgroundColor") == "rgba(0, 0, 0, 0)") {
    $("#tcanvas").css("background-color", "white");
  }
  var options = {
    quality: 1,
  };
  canvas.discardActiveObject();
  canvas.renderAll();

  domtoimage.toJpeg(node, options).then(function (dataUrl) {
    myimage = dataUrl;
    var pagebutton = document.getElementById("flip");
    pagebutton.click();

    setTimeout(print2, 200);
  });
}

function print2() {
  backgroundcolordraw($("#productCustomColor").val());
  var node = document.getElementById("tcanvas");
  var options = {
    quality: 1,
  };
  canvas.discardActiveObject();
  canvas.renderAll();
  domtoimage.toJpeg(node, options).then(function (dataUrl) {
    myimage2 = dataUrl;
    var pagebutton = document.getElementById("flip");
    var doc = new jsPDF();
    doc.addImage(myimage, "JPEG", 0, 0, 210, 130.75);

    doc.addImage(myimage2, "JPEG", 0, 150, 210, 130.75);
    doc.save("Test.pdf");
    pagebutton.click();
  });
}

function tabSelect(evt, tabName) {
  if ($(document).width() < 992) {
    if (tabName == sidebarCheck) {
      $(".tool-sidebar").css("display", "inline-block");
      $(".sidebar-collapser .fa-arrow-right").css("display", "none");
      $(".sidebar-collapser .fa-arrow-left").css("display", "block");
      sidecheck = 1;
    }
  }
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  if (tabName == "drawingtab") {
    drawingModeToggle();
  } else {
    canvas.isDrawingMode = false;
    $("#drawing-mode").css("display", "none");
    deleteListLayers();
    jsonLayers2();
  }
  document.getElementById(tabName).style.display = "block";
  if (evt == null) {
    $(".layersClick").addClass("active");
  } else {
    evt.currentTarget.className += " active";
  }
  sidebarCheck = tabName;
}

function pngImage() {
  canvas.discardActiveObject();
  canvas.renderAll();
  if ($("#tcanvas").css("backgroundColor") == "rgba(0, 0, 0, 0)") {
    $("#tcanvas").css("background-color", "white");
  }
  domtoimage.toBlob(document.getElementById("tcanvas")).then(function (blob) {
    window.saveAs(blob, "product.png");
    console.log(blob);
  });
}

function jpegImage() {
  canvas.discardActiveObject();
  canvas.renderAll();
  if ($("#tcanvas").css("backgroundColor") == "rgba(0, 0, 0, 0)") {
    $("#tcanvas").css("background-color", "white");
  }
  domtoimage
    .toJpeg(document.getElementById("tcanvas"), {
      quality: 0.95,
    })
    .then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = "product.jpeg";
      link.href = dataUrl;
      console.log(dataUrl);
      link.click();
    });
}

// Get the element with id="defaultOpen" and click on it

document.getElementById("defaultOpen").click();

function resizecheck() {
  if ($(document).width() > 992) {
    $(".tool-sidebar").css("display", "inline-block");
    $(".sidebar-collapser .fa-arrow-right").css("display", "none");
    $(".sidebar-collapser .fa-arrow-left").css("display", "block");
    sidecheck = 1;
  }
}
