$( document).ready(function () {
    $('#change_page').hide();
    $('#count').parent().addClass('hover');
    //定义变量
    var W1,P1,W1A,W1B,W2,P2,W2A,W2B,T,PT,WT,M;
    // 按钮切换
    $('#count').click(function () {
        if($('#count').parent().is('.hover')){
            return false;
        }else{
            $('#count').parent().addClass('hover');
            $('#change').parent().removeClass('hover');
            $('#count_page').show();
            $('#change_page').hide();
            $('.T').val('');
            $('.PT').val('');
            $('.WT').text('');
            $('.M').text('');
        }
    });
    $('#change').click(function () {
        if($('#change').parent().is('.hover')){
            return false;
        }else{
            $('#change').parent().addClass('hover');
            $('#count').parent().removeClass('hover');
            $('#change_page').show();
            $('#count_page').hide();
            $('.W1').val('');
            $('.P1').val('');
            $('.P2').val('');
            $('.W1A').text('');
            $('.W1B').text('');
            $('.W2').text('');
            $('.W2A').text('');
            $('.W2B').text('');
        }

    });

    //配置新墨
    $('#submit2').click(function () {
        //转换字符类型
        T = parseFloat($('.T').val());
        PT = parseFloat($('.PT').val());

        //判断输入框是否为空
        if($('.T').val() == '' || $('.T').val() == undefined || $('.T').val().length == 0){
            alert('请输入总重量');
            $('.WT').text('');
            $('.M').text('');
            return false;
        }else if($('.PT').val() == '' || $('.PT').val() == undefined ||$('.PT').val().length == 0){
            alert('请输入当前百分比');
            $('.WT').text('');
            $('.M').text('');
            return false;
        }
        //公式计算
        WT = T*100/(100-PT);
        M = WT*PT/100;

        //四舍五入保留小数点后两位
        $('.WT').text(Math.round(WT * 100) / 100);
        $('.M').text(Math.round(M * 100) / 100);
    });

    //调整比例
    $('#submit').click(function () {

        //转换字符类型
        W1 = parseFloat($('.W1').val());
        P1 = parseFloat($('.P1').val());
        P2 = parseFloat($('.P2').val());
        //判断输入框是否为空
        if($('.W1').val() == '' || $('.W1').val() == undefined || $('.W1').val().length == 0){
            alert('请输入总重量');
            $('.W1A').text('');
            $('.W1B').text('');
            $('.W2').text('');
            $('.W2A').text('');
            $('.W2B').text('');
            return false;
        }else if($('.P1').val() == '' || $('.P1').val() == undefined ||$('.P1').val().length == 0){
            alert('请输入当前百分比');
            $('.W1A').text('');
            $('.W1B').text('');
            $('.W2').text('');
            $('.W2A').text('');
            $('.W2B').text('');
            return false;
        }else if($('.P2').val() == '' || $('.P2').val() == undefined || $('.P2').val().length == 0){
            alert('请输入需要百分比');
            $('.W1A').text('');
            $('.W1B').text('');
            $('.W2').text('');
            $('.W2A').text('');
            $('.W2B').text('');
            return false;
        }
        //公式计算
        W1A = W1*(P1/100);
        W1B = W1-W1A;
        if(P2 > P1){
            W2 = (W1B*100)/(100-P2);
            W2A = (W2*P2/100) - W1A;
            W2B = 0;
        }else if(P2 < P1 || P2==P1){
            W2  = (W1A*100)/P2;
            W2A = 0;
            W2B = W2*(100-P2)/100 -W1B;
        }
        //四舍五入保留小数点后两位
        $('.W1A').text(Math.round(W1A * 100) / 100);
        $('.W1B').text(Math.round(W1B * 100) / 100);
        $('.W2').text(Math.round(W2 * 100) / 100);
        $('.W2A').text(Math.round(W2A * 100) / 100);
        $('.W2B').text(Math.round(W2B * 100) / 100);
    })
});