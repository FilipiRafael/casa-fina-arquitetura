$('#collapse-navbar').on('show.bs.collapse', () => {
    $('.article-main').css('transform', 'translate(-50%, 10%)');
});

$('#collapse-navbar').on('hide.bs.collapse', () => {
    $('.article-main').css('transform', 'translate(-50%, -50%)');
})