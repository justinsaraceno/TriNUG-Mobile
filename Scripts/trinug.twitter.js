// initialize twitter plugin
jQuery(function ($) {
    $(".tweet").tweet({
        username: "TRINUG",
        count: 5,
        join_text: "auto",
        avatar_size: 32,
        loading_text: "loading tweets...",
        auto_join_text_default: null,
        auto_join_text_ed: null,
        auto_join_text_ing: null,
        auto_join_text_reply: null,
        auto_join_text_url: null
    });
});