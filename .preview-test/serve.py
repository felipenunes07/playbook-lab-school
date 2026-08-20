import http.server, socketserver
class H(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        if self.path in ('/', '/index.html'):
            self.send_header('Content-Type', 'text/html; charset=utf-8')
        super().end_headers()
    def guess_type(self, path):
        t = super().guess_type(path)
        return 'text/html; charset=utf-8' if str(t).startswith('text/html') else t
socketserver.TCPServer.allow_reuse_address = True
socketserver.TCPServer(('127.0.0.1', 3021), H).serve_forever()
