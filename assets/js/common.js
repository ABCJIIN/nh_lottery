$(function() {

    // lnb 1depth 열기/닫기
    function lnbDepth01(){
        $(document).on('click', '.depth01:not(.home) > a', function(e){
            e.preventDefault();
            var $this = $(this);
            var $depth01 = $this.closest('.depth01');

            if($this.hasClass('on')) {
                $this.removeClass('on');
                $this.siblings('ul').find('.depth02 > a').removeClass('on');
                $depth01.find('ul').slideUp();
            } else {
                $this.addClass('on');
                $this.siblings('ul').find('.depth02 > a').addClass('on');
                $depth01.siblings('.depth01').find('> a').removeClass('on');
                $depth01.siblings('.depth01').find('ul').slideUp();
                $this.siblings('ul').stop(true, true).slideDown();
                
                // depth01 내의 depth02 안의 ul도 슬라이드 다운
                $this.closest('.depth01').find('.depth02 ul').stop(true, true).slideDown();
            }
        });
    }
    lnbDepth01();

    // lnb 2depth 열기/닫기
    function lnbDepth02() {
        $(document).on('click', '.depth02.add > a', function(e){
            e.preventDefault();
            var $this = $(this);
            var $depth02 = $this.closest('.depth02');

            if($this.hasClass('on')) {
                $this.removeClass('on');
                $depth02.find('ul').slideUp();
            } else {
                $this.addClass('on');
                $depth02.find('ul').slideDown();
            }
        });
    }lnbDepth02();

    // 홈 Default 활성화
    $('.wrap.main .lnb > .menu-wrap > .menu li.home a').addClass('active');

    $(document).on('click', '.depth01.type01 > a', function() {
        $('.wrap.main .lnb > .menu-wrap > .menu li a').removeClass('active');
        $(this).parents('.depth01.type01').find('.depth02:first > a').next('ul').find('.depth03:first > a').addClass('active');
    });

    $(document).on('click', '.depth01.type02 > a', function() {
        $('.wrap.main .lnb > .menu-wrap > .menu li a').removeClass('active');
        $(this).parents('.depth01.type02').find('.depth02:first > a').addClass('active');
    });

    var breadcrumbLastValue01 = $('.wrap:not(.main) .breadcrumb ul li:nth-child(2)').text().trim();
    var breadcrumbLastValue = $('.wrap:not(.main) .breadcrumb ul li:last-child').text().trim();

    $('.wrap:not(.main) .lnb > .menu-wrap > .menu li a').each(function() {

        var menuLinkValue01 = $(this).closest('.depth01').find('> a').text().trim();
        var menuLinkValue = $(this).text().trim();

        if (breadcrumbLastValue01 === menuLinkValue01 && breadcrumbLastValue === menuLinkValue) {
            $(this).addClass('active');
        }

        if ($(this).hasClass('active')) {
            $(this).closest('.depth01').find('ul').slideDown();
            $(this).addClass('on');
            $(this).closest('.depth01').find('.depth02').find('> a').addClass('on');
        }
    });

});