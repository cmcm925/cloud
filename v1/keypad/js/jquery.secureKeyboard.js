/**
 * Created by jychoi on 2017. 1. 5.
 * Customized for TradeSing Cloud Certification Service on 2022. 6. 1.
 **/

(function ($) {

    'use strict';

    $.fn.SVkeyboard = $.SVkeyboard = $.svk = {  // namespace define & to easy use alias define

        //  default options stored object
        //  To protect default option data from abusing
        _defaults: function () {

            var _defaultSecure = false,
                _defaultEncrypt = false,
                _defaultKey = 'abcdefghijklmnopqrstuvwxyz123456',    // 32bit secure key
                _numpads = [
                    [['1'], ['2'], ['3'], ['\u232B']],
                    [['4'], ['5'], ['6'], ['ENTER']],
                    [['7'], ['8'], ['9'], ['RESET']],
                    [[''], ['0'], [''], ['CLOSE']]
                ],
                _qwerty = [
                    [['`', '~'], ['1', '!'], ['2', '@'], ['3', '#'], ['4', '$'], ['5', '%'], ['6', '^'], ['7', '&'], ['8', '*'], ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], [''], ['\u232B']],
                    [['q', 'Q', 'ㅂ', 'ㅃ'], ['w', 'W', 'ㅈ', 'ㅉ'], ['e', 'E', 'ㄷ', 'ㄸ'], ['r', 'R', 'ㄱ', 'ㄲ'], ['t', 'T', 'ㅅ', 'ㅆ'], ['y', 'Y', 'ㅛ'], ['u', 'U', 'ㅕ'], ['i', 'I', 'ㅑ'], ['o', 'O', 'ㅐ', 'ㅒ'], ['p', 'P', 'ㅔ', 'ㅖ'], ['[', '{'], [']', '}'], ['\\', '|'], [''], ['TAB']],
                    [[''], ['a', 'A', 'ㅁ'], ['s', 'S', 'ㄴ'], ['d', 'D', 'ㅇ'], ['f', 'F', 'ㄹ'], ['g', 'G', 'ㅎ'], ['h', 'H', 'ㅗ'], ['j', 'J', 'ㅓ'], ['k', 'K', 'ㅏ'], ['l', 'L', 'ㅣ'], [';', ':'], ['\'', '"'], [''], [''], ['ENTER']],
                    [[''], [''], ['z', 'Z', 'ㅋ'], ['x', 'X', 'ㅌ'], ['c', 'C', 'ㅊ'], ['v', 'V', 'ㅍ'], ['b', 'B', 'ㅠ'], ['n', 'N', 'ㅜ'], ['m', 'M', 'ㅡ'], [',', '<'], ['.', '>'], ['/', '?'], [''], [''], ['SHIFT']],
                    [['SPACE'], ['\uD83C\uDF10']]
                ],
                _simpleQwerty = [
                    [['q', 'Q', 'ㅂ', 'ㅃ'], ['w', 'W', 'ㅈ', 'ㅉ'], ['e', 'E', 'ㄷ', 'ㄸ'], ['r', 'R', 'ㄱ', 'ㄲ'], ['t', 'T', 'ㅅ', 'ㅆ'], ['y', 'Y', 'ㅛ'], ['u', 'U', 'ㅕ'], ['i', 'I', 'ㅑ'], ['o', 'O', 'ㅐ', 'ㅒ'], ['p', 'P', 'ㅔ', 'ㅖ'], [''], ['\u232B']],
                    [[''], ['a', 'A', 'ㅁ'], ['s', 'S', 'ㄴ'], ['d', 'D', 'ㅇ'], ['f', 'F', 'ㄹ'], ['g', 'G', 'ㅎ'], ['h', 'H', 'ㅗ'], ['j', 'J', 'ㅓ'], ['k', 'K', 'ㅏ'], ['l', 'L', 'ㅣ'], [''], ['ENTER']],
                    [[''], [''], ['z', 'Z', 'ㅋ'], ['x', 'X', 'ㅌ'], ['c', 'C', 'ㅊ'], ['v', 'V', 'ㅍ'], ['b', 'B', 'ㅠ'], ['n', 'N', 'ㅜ'], ['m', 'M', 'ㅡ'], [''], [''], ['SHIFT']],
                    [['SPACE'], ['\uD83C\uDF10']]
                ],
                _qwertyV2 = [
                    [['q', 'Q', 'ㅂ', 'ㅃ', '1', '!'], ['w', 'W', 'ㅈ', 'ㅉ', '2', '@'], ['e', 'E', 'ㄷ', 'ㄸ', '3', '#'], ['r', 'R', 'ㄱ', 'ㄲ', '4', '$'], ['t', 'T', 'ㅅ', 'ㅆ', '5', '%'], ['y', 'Y', 'ㅛ', '6', '^'], ['u', 'U', 'ㅕ', '7', '&'], ['i', 'I', 'ㅑ', '8', '*'], ['o', 'O', 'ㅐ', 'ㅒ', '9', '('], ['p', 'P', 'ㅔ', 'ㅖ', '0', ')'], [''], ['\u232B']],
                    [[''], ['a', 'A', 'ㅁ', '`', '~'], ['s', 'S', 'ㄴ', '-', '_'], ['d', 'D', 'ㅇ', '=', '+'], ['f', 'F', 'ㄹ', '[', '{'], ['g', 'G', 'ㅎ', ']', '}'], ['h', 'H', 'ㅗ', '\\', '|'], ['j', 'J', 'ㅓ', ';', ':'], ['k', 'K', 'ㅏ', '\'', '"'], ['l', 'L', 'ㅣ', ',', '<'], [''], ['ENTER']],
                    [[''], [''], ['z', 'Z', 'ㅋ', '.', '>'], ['x', 'X', 'ㅌ', '/', '?'], ['c', 'C', 'ㅊ', '\u2606', '\u2606'], ['v', 'V', 'ㅍ', '\u00A9', '\u00A9'], ['b', 'B', 'ㅠ', '\u2661', '\u2661'], ['n', 'N', 'ㅜ', '\u221A', '\u221A'], ['m', 'M', 'ㅡ', '\u00B0', '\u00B0'], [''], [''], ['SHIFT']],
                    [['SPACE'], ['\u203B'], ['\uD83C\uDF10']]
                ],
                keyboard = {
                    options: {
                        secure: _defaultSecure,
                        secureKey: _defaultKey,
                        encrypt: _defaultEncrypt
                    },
                    layouts: {
                        _qwerty2: _qwertyV2,
                        _qwerty: _qwerty,
                        _simpleQwerty: _simpleQwerty,
                        _numpads: _numpads
                    }
                };
            return keyboard;

        },

        //  public methods
        //
        //  init(randomOption)
        //  this method initializes keyboard
        //
        //  @parameter
        //  userOptions(Object) : if user want to change options (ex. randomized keypad layout)
        //                        you write parameters that want to change
        //
        //  @return
        //  (String) : current keyboard initialized option

        init: function (userOptions) {

            // user options and default options are merged, by this line.
            var options = $.extend({}, this._defaults().options, userOptions),
                layouts = this._defaults().layouts,
                prevEvent = null,                                               // previous touch event
                encrypted,
                state = false,
                state2 = false,
                generatedHTML,                                                  // html tags composing keyboard layout
                $body = $('body'),
                $keyboard;

            // if keyboard is already existed, no more keyboard elements
            if (document.getElementsByClassName('svk_keyboard').length === 0) {
                $body.append('<div class="svk_keyboard" tabindex="0"></div>');
            }

            // caching multiple use function
            $keyboard = $('.svk_keyboard');

            // prevent mobile double tap
            $body.off('touchstart').on('touchstart', function (event) {

                // touch start time - previous touch start time < 200ms
                if (event.timeStamp - prevEvent < 200) {
                    event.preventDefault();
                }
                prevEvent = event.timeStamp;

            });

            // sense orientation and fit with window size
            $(window).off('resize').resize(function () {
                if ($keyboard.length > 0) {
                    if (window.innerHeight < $('.certWrap').height()) {
                        if (window.innerHeight > window.innerWidth) {       // portrait mode
                            document.body.scrollTop -= $keyboard.height();
                            $keyboard.css('top', window.innerHeight - $keyboard.height());
                        }
                        else {                                           // landscape mode
                            document.body.scrollTop += $keyboard.height();
                            $keyboard.css('top', window.innerHeight - $keyboard.height());
                        }
                    }
                    else {
                        $keyboard.css('top', $('.certWrap').height() - $keyboard.height());
                    }
                }
                else {
                    $keyboard.css('top', window.innerHeight);
                }
            });

            $body.off('click').on('click', function (event) {

                if (event.target.classList.contains('nameField') == true) {

                        $('.nameField').blur();     // mobile keypad not exist
                        if (options.secure) {
                            generatedHTML = _writeHTML('svk_letter', _randomLayout('svk_letter', layouts._simpleQwerty));
                        }

                        else {
                            generatedHTML = _writeHTML('svk_letter', layouts._simpleQwerty);
                        }

                        if (($keyboard.children().length) === 0) {

                            // if sufficient space exists under input form, keyboard created under input form
                            if ((window.innerHeight - event.clientY) > 300) {
                                $keyboard.append(generatedHTML);
                                if (window.innerHeight < $('.certWrap').height()) {
                                    $keyboard.css('top', window.innerHeight - $keyboard.height());
                                }
                                else {
                                    $keyboard.css('top', $('.certWrap').height() - $keyboard.height());
                                }
                            }
                            // if spaces is not sufficient, scrolled as keyboard size and created under input form
                            else {
                                $keyboard.append(generatedHTML);
                                document.body.scrollTop += $keyboard.height();
                                $keyboard.css('top', window.innerHeight - $keyboard.height());
                            }
                            $keyboard.focus();
                        }

                        // if keyboard already exists, scrolled up as keyboard size and deleted keyboard
                        else {
                            $keyboard.css('top', window.innerHeight);
                            document.body.scrollTop -= $keyboard.height();
                            $keyboard.html('');
                            event.target.focus();
                        }

                        // Sense keyboard li's contents
                        $('.svk_letter').off('click').on('click', function () {

                            var $this = $(this),
                                currentText = '',
                                $form = $(event.target).prev('input'),                      // event.target is clicked input
                                character = this.innerText;

                            if ($this.hasClass('svk_shift')) {
                                $('.svk_letter > span > span').toggleClass('svk_upper');
                                return;
                            }

                            if ($this.hasClass('svk_local')) {
                                $('.svk_letter > span').toggleClass('svk_kr');
                                state = true;
                                return;
                            }

                            if ($this.hasClass('svk_del')) {
                                currentText = $form.val();
                                $form.val(currentText.substr(0, currentText.length - 1));
                                return '';
                            }

                            if ($this.hasClass('svk_space')) {
                                character = ' ';
                            }

                            if ($this.hasClass('svk_enter')) {
                                $keyboard.css('top', window.innerHeight);
                                document.body.scrollTop -= $keyboard.height();
                                $keyboard.html('');
                                event.target.focus();
                                return '';
                            }

                            if ($this.hasClass('svk_uppercase')) {
                                character = character.toUpperCase();
                            }

                            // Add the character
                            $form.val($form.val() + character);
                            $form.val(Hangul.assemble($form.val()));

                            if (options.encrypt) {
                                encrypted = _encrypt($form.val(), options.secureKey);
                                // test case #1
                                $('.tv').val('encode value = ' + encrypted);
                                encrypted = _decrypt(encrypted, options.secureKey);
                                // test case #2
                                $('.tv2').val('decode value = ' + encrypted);
                            }
                        });

                } else if(event.target.classList.contains('hangulField') == true) {

                        $('.hangulField').blur();     // mobile keypad not exist
                        if (options.secure) {
                            generatedHTML = _writeHTML('svk_symbol', _randomLayout('svk_symbol', layouts._qwerty2));
                        }
                        else {
                            generatedHTML = _writeHTML('svk_symbol', layouts._qwerty2);
                        }

                        // 기존에 키보드가 없는 경우
                        if (($keyboard.children().length) === 0) {
                            // 폼 아래에 충분한 공간이 있을 경우에는 그냥 하단에 키보드를 생성

                            if ((window.innerHeight - event.clientY) > 300) {
                                $keyboard.append(generatedHTML);
                                if (window.innerHeight < $('.certWrap').height()) {
                                    $keyboard.css('top', window.innerHeight - $keyboard.height());
                                }
                                else {
                                    $keyboard.css('top', $('.certWrap').height() - $keyboard.height());
                                }
                            }
                            // 폼 아래에 충분한 공간이 없을 경우에는 키보드 만큼 스크롤을 내리고, 하단에 키보드를 생성시킨다.
                            else {
                                $keyboard.append(generatedHTML);
                                document.body.scrollTop = $keyboard.height();
                                $keyboard.css('top', window.innerHeight - $keyboard.height());
                            }
                            $keyboard.focus();
                        }

                        // 기존 키보드가 있는 경우
                        else {
                            $keyboard.css('top', window.innerHeight);
                            document.body.scrollTop -= $keyboard.height();
                            $keyboard.html('');
                            event.target.focus();
                        }

                        // Sense keyboard li's contents
                        $('.svk_symbol').on('click', function () {
                            var $this = $(this),
                                $form = $(event.target).prev('input'), 
                                currentText,
                                character = this.innerText;

                            if ($this.hasClass('svk_shift')) {
                                $('.k > span > span').toggleClass('svk_upper');
                                return '';
                            }

                            if ($this.hasClass('svk_local')) {
                                state = !state;
                                if (state2) {
                                    $('.k > span').toggleClass('svk_others');
                                }
                                $('.k > span').toggleClass('svk_kr');
                                return '';
                            }

                            if ($this.hasClass('svk_del')) {
                                currentText = $form.val();
                                $form.val(currentText.substr(0, currentText.length - 1));
                                return '';
                            }

                            if ($this.hasClass('svk_space')) {
                                character = ' ';
                            }

                            if ($this.hasClass('svk_enter')) {
                                $keyboard.css('top', window.innerHeight);
                                document.body.scrollTop -= $keyboard.height();
                                $keyboard.html('');
                                event.target.focus();
                                return '';
                            }

                            if ($this.hasClass('svk_tab')) {
                                character = '\t';
                            }

                            if ($this.hasClass('svk_specials')) {
                                if (state) {
                                    $('.k > span').toggleClass('svk_kr');
                                }
                                state2 = !state2;
                                $('.k > span').toggleClass('svk_others');
                                $('.svk_local').toggleClass('svk_kr');
                                return '';
                            }

                            // Add the character
                            $form.val($form.val() + character);
                            $form.val(Hangul.a($form.val()));

                            if (options.encrypt) {
                                encrypted = _encrypt($form.val(), options.secureKey);
                                // test case #1
                                $('.tv').val('encode value = ' + encrypted);
                                encrypted = _decrypt(encrypted, options.secureKey);
                                // test case #2
                                $('.tv2').val('decode value = ' + encrypted);
                            }
                        });

                } else if(event.target.classList.contains('pwdField') == true) {

                        $('.pwdField').blur();     // mobile keypad not exist

                        if (options.secure) {
                            generatedHTML = _writeHTML('svk_number', _randomLayout('svk_number', layouts._numpads));
                        }
                        else {
                            generatedHTML = _writeHTML('svk_number', layouts._numpads);
                        }

                        // if keyboard is already opened, close present keyboard.
                        if (($keyboard.children().length) === 0) {
                            // attach keyboard to upper side form
                            if ((window.innerHeight - event.clientY) > 300) {
                                $keyboard.append(generatedHTML);
                                if (window.innerHeight < $('.certWrap').height()) {
                                    $keyboard.css('top', window.innerHeight - $keyboard.height());
                                }
                                else {
                                    $keyboard.css('top', $('.certWrap').height() - $keyboard.height());
                                }
                            }
                            // attach keyboard to down side form
                            else {
                                $keyboard.append(generatedHTML);
                                document.body.scrollTop = $keyboard.height();
                                $keyboard.css('top', window.innerHeight - $keyboard.height());
                            }
                            $keyboard.focus();
                        }
                        else {
                            $keyboard.css('top', window.innerHeight);
                            document.body.scrollTop -= $keyboard.height();
                            $keyboard.html('');
                            event.target.focus();
                        }

                        // Sense keyboard li's contents
                        $('.svk_number').on('click', function () {

                            var $this = $(this),
                                currentText,
                                $form = $(event.target).prev('input'), 
                                character = this.innerText;

                            if ($this.hasClass('svk_del')) {
                                currentText = $form.val();
                                $form.val(currentText.substr(0, currentText.length - 1));
                                return '';
                            }

                            if ($this.hasClass('svk_reset')) {
                                currentText = $form.val();
                                $form.val(currentText.substr(currentText.length));
                                return '';
                            }

                            if ($this.hasClass('svk_enter')) {
                                $keyboard.css('top', window.innerHeight);
                                document.body.scrollTop -= $keyboard.height();
                                $keyboard.html('');
                                event.target.focus();
                                return '';
                            }

                            if ($this.hasClass('svk_close')) {
                                $keyboard.css('top', window.innerHeight);
                                document.body.scrollTop -= $keyboard.height();
                                $keyboard.html('');
                                event.target.focus();
                                return '';
                            }

                            // Add the character
                            $form.val($form.val() + character);
                            if ($form.val().length >= 6) {
                                $form.val($form.val().substring(0, 6));
                                $keyboard.css('top', window.innerHeight);
                                document.body.scrollTop -= $keyboard.height();
                                $keyboard.html('');
                                $form.focus();
                            }

                            if (options.encrypt) {
                                encrypted = _encrypt($form.val(), options.secureKey);
                                // test case #1
                                $('.tv').val('encode value = ' + encrypted);
                                encrypted = _decrypt(encrypted, options.secureKey);
                                // test case #2
                                $('.tv2').val('decode value = ' + encrypted);
                            }
                        });
                }
            });

            return 'keyboard initialized [ shuffle : ' + options.secure + ' ]';
        },

        //
        //  public methods
        //
        //  detach()
        //  if you want remove keyboard, you can call this method
        //

        detach: function () {
            $keyboard.remove();
        }
    };

    //
    //  private methods
    //
    //  _randomLayout(keyboardType, layout)
    //  this method uses keyboard array to shuffle keyboard's layout
    //
    //  @parameter
    //  keyboardType(String) : options for switch from numpads to full qwerty keyboard
    //  layout(Array) : keyboard array
    //
    //  @return
    //  changedKeyset : randomized keypad array
    //
    var _randomLayout = function (keyboardType, layout) {

        var changedKeyset = JSON.parse(JSON.stringify(layout)),
            temp,
            rNum,
            rNum2;

        (function () {
            changedKeyset.forEach(function (lineItem, lineIdx) {

                rNum2 = Math.floor(Math.random() * lineIdx);

                lineItem.forEach(function (ary, index) {

                    rNum = Math.floor(Math.random() * lineItem.length);

                    while (rNum > (lineItem.length - 2)) {
                        rNum = Math.floor(Math.random() * (lineItem.length));
                    }

                    switch (keyboardType) {

                        case 'svk_number':

                            if (index !== lineItem.length - 1) {
                                temp = lineItem[index];
                                lineItem[index] = changedKeyset[rNum2][rNum];
                                changedKeyset[rNum2][rNum] = temp;
                            }
                            break;

                        default:

                            if (lineIdx !== changedKeyset.length - 1) {
                                if (index !== lineItem.length - 1) {

                                    temp = lineItem[index];
                                    if (lineItem[rNum].length === 1) {
                                        lineItem.splice(rNum, 1);
                                        lineItem.splice(index, 0, ['']);
                                    }
                                }
                            }
                    }
                });
            });
        })();
        return changedKeyset;
    };

    //
    //    _writeHTML = function (keyboardType, layout)
    //
    //    Read keypad array's data and translate them to html tags
    //
    //    @parameter
    //
    //    keyboardType(String)  : number(only numbers) ,
    //                            letter(only characters) ,
    //                            symbol(basic qwerty layout)
    //
    //    layout(Array)         : keyboard layout array
    //
    //    @return
    //    html(String)          : html tags derived from keyboard which is selected from parameter
    //

    var _writeHTML = function (keyboardType, layout) {

        var html = '';

        (function () {
            layout.forEach(function (lineItem, lineNum) {           // line

                html += '<div class="svk_line' + (lineNum + 1) + '">';

                lineItem.forEach(function (ary) {                   // item array

                    html += '<button type="button" class="' + keyboardType;

                    ary.forEach(function (item, idx) {              // current item

                        switch (item) {

                            case '\u232B':
                                html += ' svk_del svk_lastitem" title="백스페이스">' + item;
                                break;

                            case '\u203B':
                                html += ' svk_specials" title="특수문자">' + item;
                                break;

                            case '\uD83C\uDF10':
                                html += ' svk_local svk_lastitem" title="글로벌">' + item;
                                break;

                            case 'ENTER':
                                html += ' svk_enter svk_lastitem">' + item;
                                break;

                            case 'TAB':
                                html += ' svk_tab svk_lastitem">' + item;
                                break;

                            case 'SHIFT':
                                html += ' svk_shift svk_lastitem">' + item;
                                break;

                            case 'RESET':
                                html += ' svk_reset svk_lastitem">' + item;
                                break;

                            case 'CLOSE':
                                html += ' svk_close svk_lastitem">' + item;
                                break;

                            case 'SPACE':
                                html += ' svk_space">' + item;
                                break;

                            case '':
                                html += ' svk_null" disabled>' + item;
                                break;

                            default:

                                if (ary.length === 1) {             // numpad의 경우만 적용
                                    html += '">' + item + '</span>';
                                }

                                if (ary.length === 2) {             // 특수문자의 경우에 적용

                                    if (idx === 0) {
                                        html += '">' +
                                            '<span class="svk_others"><span class="svk_lower">' + item + '</span>';
                                    }

                                    else {
                                        html += '<span class="svk_upper">' + item + '</span></span></span>';
                                    }
                                }
                                else {

                                    if (ary.length === 3) {         // 영어 대,소문자와 한글 문자 하나가 들어가는 경우

                                        if (idx === 0) {
                                            html += ' k">' +
                                                '<span class="svk_en"><span class="svk_lower">' + item + '</span>';
                                        }
                                        else if (idx === 1) {
                                            html += '<span class="svk_upper">' + item + '</span></span>';
                                        }
                                        else {
                                            html += '<span class="svk_kr">' + item + '</span></span>';
                                        }
                                    }

                                    if (ary.length === 4) {         // 영어 대,소문자와 한글 문자 두개가 들어가는 경우
                                        if (idx === 0) {
                                            html += ' k">' +
                                                '<span class="svk_en"><span class="svk_lower">' + item + '</span>';
                                        }
                                        else if (idx === 1) {
                                            html += '<span class="svk_upper">' + item + '</span></span>';
                                        }
                                        else if (idx === 2) {
                                            html += '<span class="svk_kr"><span class="svk_lower">' + item + '</span>';
                                        }
                                        else {
                                            html += '<span class="svk_upper">' + item + '</span></span></span>';
                                        }
                                    }
                                    if (ary.length === 5) {
                                        if (idx === 0) {
                                            html += ' k">' +
                                                '<span class="svk_en"><span class="svk_lower">' + item + '</span>';
                                        }
                                        else if (idx === 1) {
                                            html += '<span class="svk_upper">' + item + '</span></span>';
                                        }
                                        else if (idx === 2) {
                                            html += '<span class="svk_kr">' + item + '</span>';
                                        }
                                        else if (idx === 3) {
                                            html += '<span class="svk_others"><span class="svk_lower">' + item + '</span>';
                                        }
                                        else {
                                            html += '<span class="svk_upper">' + item + '</span></span></span>';
                                        }
                                    }
                                    if (ary.length === 6) {
                                        if (idx === 0) {
                                            html += ' k">' +
                                                '<span class="svk_en"><span class="svk_lower">' + item + '</span>';
                                        }
                                        else if (idx === 1) {
                                            html += '<span class="svk_upper">' + item + '</span></span>';
                                        }
                                        else if (idx === 2) {
                                            html += '<span class="svk_kr"><span class="svk_lower">' + item + '</span>';
                                        }
                                        else if (idx === 3) {
                                            html += '<span class="svk_upper">' + item + '</span></span>';
                                        }
                                        else if (idx === 4) {
                                            html += '<span class="svk_others"><span class="svk_lower">' + item + '</span>';
                                        }
                                        else {
                                            html += '<span class="svk_upper">' + item + '</span></span></span>';
                                        }
                                    }
                                }
                        }
                    });
                    html += '</button>';
                });
                html += '</div>';
            });
        })();
        return html;
    };

    //
    //    _encrypt = function (input, key)
    //
    //    read input field's string and encrypt it using AES key value
    //
    //    @parameter
    //    input(String)         : input field's data
    //    key(String)           : AES key (32bit)
    //
    //    @return
    //    input(String)         : encrypted input data is returned
    //
    var _encrypt = function (input, key) {
        input = GibberishAES.aesEncrypt(input, key);
        return input;
    };


    //
    //    _decrypt = function (input, key)
    //
    //    read encrypted field's string and decrypt it using AES key value
    //
    //    @parameter
    //    input(String)         : input encrypted field's data
    //    key(String)           : AES key (32bit)
    //
    //    @return
    //    input(String)         : decrypted input data is returned
    //
    var _decrypt = function (input, key) {
        input = GibberishAES.aesDecrypt(input, key);
        return input;
    };

})(jQuery);
