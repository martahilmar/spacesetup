
echo "export default {
  debug: false,
  testing: false
};" > src/environment.js

echo "Building project..."
au build --env prod

echo ""
echo "Copying files to marta8dennis.com"
scp -r scripts index.html livepi:marta8dennis.com/spacesetup

echo ""
echo "Restarting webserver & Setting defaults..."
ssh livepi sudo service nginx restart
echo "export default {
  debug: true,
  testing: true
};" > src/environment.js

echo "Success!"
