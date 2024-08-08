$(function() {

    // lnb 1depth 열기/닫기
    function lnbDepth01(){
        $(document).on('click', '.depth01 > a:not(.home)', function(e){
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
    $('.main .lnb > .menu-wrap > .menu li .home').addClass('active');

    var breadcrumbLastValue = $('.breadcrumb ul li:last-child').text().trim();

    $('.wrap:not(.main) .lnb > .menu-wrap > .menu li a').each(function() {

        var menuLinkValue = $(this).text().trim();

        if (breadcrumbLastValue === menuLinkValue) {
            $(this).addClass('active');
        }
    });

        $(document).on('click', '.depth01 > a.type01', function(){
        var $this = $(this);

        // $this.parents('.depth01').find('.depth02:first > a').next('ul').find('.depth03:first > a').addClass('active');

        if (!$this.hasClass('active')) {
            $this.addClass('active');
            $this.parents('.depth01').find('.depth02 > a').not($this).removeClass('active');
        }
    
        $('.lnb > .menu-wrap > .menu li .home').removeClass('active');
    });

    $(document).on('click', '.depth03 > a', function(){
        var $this = $(this);

        if (!$this.hasClass('active')) {
            $this.addClass('active');
            $this.parents('.depth01').find('.depth03 > a').not($this).removeClass('active');
        }
    });

    $(document).on('click', '.depth01 > a.type02', function(){
        var $this = $(this);
    
        // 이미 실행된 상태인지 확인
        if (!$this.data('activated')) {
            $this.next('ul').find('.depth02:first > a').addClass('active');
            $this.data('activated', true);  // 상태를 저장
        }
    
        $('.lnb > .menu-wrap > .menu li .home').removeClass('active');
    });

    $(document).on('click', 'a.type02+ul > .depth02 > a', function(){
        var $this = $(this);
    
        if (!$this.hasClass('active')) {
            $this.addClass('active');
            $this.parents('.depth01').find('.depth02 > a').not($this).removeClass('active');
        }
    });







    //    // 현재 페이지의 URL 경로를 가져옵니다.
    //    var currentPath = window.location.pathname;
    
    //    // 모든 a 태그를 순회하며 href 속성과 비교합니다.
    //    $('.lnb .menu-wrap .menu li a').each(function() {
    //        var $this = $(this);
           
    //        // href 속성과 현재 경로를 비교하여 일치하는 경우 active 클래스를 추가합니다.
    //        if ($this.attr('href') === currentPath) {
    //            $this.addClass('active');
               
    //            // 상위의 부모 메뉴에도 필요한 클래스를 추가하여 열어줍니다.
    //            $this.closest('.depth02').siblings('a').addClass('on');
    //            $this.closest('.depth01').find('> a').addClass('on');
    //            $this.closest('ul').slideDown();  // 메뉴 열기
    //        }
    //    });

});