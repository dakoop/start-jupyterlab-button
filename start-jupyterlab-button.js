define(['jquery',
        'base/js/namespace'],
        function($, Jupyter) {
            function load() {
                if (!Jupyter.notebook_list) return;
                var base_url = Jupyter.notebook_list.base_url;

                var button = $('<a class="btn btn-sm btn-default navbar-btn" style="margin-left: 2px; margin-right: 2px;"/>');
                button.attr('href', base_url + 'lab')
                button.text("JupyterLab");
                var span = $('<span/>');
                span.append(button);
                $("#header-container span.flex-spacer").first().after(span);
            }

            return {
                load_ipython_extension: load
            };
        });