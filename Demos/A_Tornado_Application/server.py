import tornado.ioloop
import sys


from application import application

PORT = '8888'

if __name__ == "__main__":
  if len(sys.argv) > 1:
    PORT = sys.argv[1]
  application.listen(PORT)
  print 'Development sever is running at http://127.0.0.1:%s/' % PORT
  print 'Quit the server with CONTROL-C'
  tornado.ioloop.IOLoop.instance().start()