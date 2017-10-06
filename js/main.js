(function($) {

  // .switcher
  const switcher = function() {

    // Data
    const data = {
      first: {
        cover: 'images/switcher/2.jpg',
        heading: 'Sed tristique ex vel',
        text: 'Maecenas tempor diam velit, quis ultricies nulla placerat in. Aenean sed venenatis ante. Sed tristique ex vel volutpat scelerisque. Nam a nisi et ante scelerisque semper.'
      },
      second: {
        cover: 'images/switcher/1.jpg',
        heading: 'Maecenas sit amet faucibus odio',
        text: 'Quisque justo felis, maximus sit amet tincidunt vel, ultrices ac erat. Curabitur non lacinia dui, ut mollis purus. Quisque scelerisque, lorem id bibendum sollicitudin, est tellus dignissim metus, ut feugiat urna diam eu erat. Maecenas sit amet faucibus odio.'
      },
      third: {
        cover: 'images/switcher/3.jpg',
        heading: 'Integer convallis tincidunt',
        text: 'Donec porttitor at dui eget porta. Vestibulum blandit sapien dolor, ac congue mi suscipit non. Phasellus sed lacus luctus, auctor diam eu, mattis mauris. Integer convallis tincidunt sollicitudin. Mauris sed leo diam. Etiam mollis ullamcorper velit, vel euismod dolor.'
      },
      fourth: {
        cover: 'images/switcher/4.jpg',
        heading: 'Morbi maximus gravida',
        text: 'Quisque non quam nec nisl lacinia sollicitudin. Donec eros dolor, commodo sed diam ut, dapibus blandit erat. Morbi maximus gravida ultricies. Vestibulum laoreet lorem quis elit efficitur mattis. Ut rhoncus, nisi sit amet laoreet ultrices, purus orci commodo quam, eu commodo justo tortor in lectus. '
      }
    }

    // Render view
    function view({ cover, heading, text} ) {
      $('.switcher__cover').css('background-image', `url(${cover})`)
      $('.switcher__heading').text(heading);
      $('.switcher__text').text(text);
    }

    $('.switcher__toggle').each(function() {
      $(this).hover(function() {
        $('.switcher__toggle').removeClass('active');
        $(this).addClass('active');

        // Render new data
        const key = $(this).data('key');
        data[key] && view(data[key]);
      });
      $(this).click(function() {
        return false;
      });
    });

    // Set first
    view(data.first);
  }
  switcher();

})(jQuery);