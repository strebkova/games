import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";


class Resizing extends React.Component {
  componentDidMount() {
    let maxWidth = $(window).width();
  let maxHeight = $(window).height();
  let ratio = 0;
  let width = $('.wrap').width();
  let height = $('.wrap').height();
  if (width > maxWidth) {
    ratio = maxWidth / width;
    $('.wrap').css("width", maxWidth);
    $('.wrap').css("height", height * ratio);
    height = height * ratio;
    width = width * ratio;
  }
  if (width < maxWidth) {
    ratio = maxWidth / width;
    $('.wrap').css("width", maxWidth);
    $('.wrap').css("height", height * ratio);
    height = height * ratio;
    width = width * ratio;
  }

  if (height > maxHeight) {
    ratio = maxHeight / height;
    $('.wrap').css("height", maxHeight);
    $('.wrap').css("width", width * ratio);
    width = width * ratio;
    height = height * ratio;
  }
  }
}

$(document).ready(function () {
  ResizingFunc();
  $(window).resize(function () {
    ResizingFunc();
  });
});

export const ResizingFunc = () => {
  let maxWidth = $(window).width();
  let maxHeight = $(window).height();
  let ratio = 0;
  let width = $('.wrap').width();
  let height = $('.wrap').height();
  if (width > maxWidth) {
    ratio = maxWidth / width;
    $('.wrap').css("width", maxWidth);
    $('.wrap').css("height", height * ratio);
    height = height * ratio;
    width = width * ratio;
  }
  if (width < maxWidth) {
    ratio = maxWidth / width;
    $('.wrap').css("width", maxWidth);
    $('.wrap').css("height", height * ratio);
    height = height * ratio;
    width = width * ratio;
  }

  if (height > maxHeight) {
    ratio = maxHeight / height;
    $('.wrap').css("height", maxHeight);
    $('.wrap').css("width", width * ratio);
    width = width * ratio;
    height = height * ratio;
  }
};

export default Resizing