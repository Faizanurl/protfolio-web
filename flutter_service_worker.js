'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "64d42024f1a77ee5e61e4096bdebac78",
".git/config": "c1a67d496ea7668113bbb209171e946f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "be9de2f6d400f5c76d678ab85070b2df",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f006a977b6366ba74e893251f105efcc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9fd069ed106d8c4f7d6384a6f14d6bc3",
".git/logs/refs/heads/master": "9fd069ed106d8c4f7d6384a6f14d6bc3",
".git/logs/refs/remotes/origin/HEAD": "effb1877c2c3040fbc5f6d4bd8d999ff",
".git/logs/refs/remotes/origin/master": "813a7f40db254e207b858a97cd6d9a94",
".git/objects/10/854a6cf009468096c700844373c87cf3dcecb3": "439207f0109c7f2b7f03e6ea4b7b2b60",
".git/objects/14/0a3c27cd93c94a7277ef02ce39167b6c54a161": "32117b03c8e5cd263d788efaa5dee937",
".git/objects/19/ede6216c9ab0b74df205604ee186566b2695de": "96301928f5c921f81467243b6b2e435c",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/2b/317f95bec8e1269d04bb1546d326caeba42043": "17a6968a1720b4b0e11deb23e471a1af",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/4a/35583f52de6074bc54fd4f3239fd5f814c1352": "db68023612e2b87d51112f5e6f169a65",
".git/objects/4d/e691f53232702105b0ca648f85dd0df4053c5f": "580caf7173149777aff245fbf379a17a",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/1871d0a0f67d11ef8479c8928a3fddd4b0bd7b": "c44436aee82c6f6af52665582d3d9424",
".git/objects/72/132ce320d903bb8f7b36865fb0d20a358fceaf": "4c9ef5c83b9cc7ecd3fa8bbe2613db9d",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/76/c8cee2a18da3439e8f805e5ac21d801ebea80a": "1526880f70def82be02963248fbcc5fe",
".git/objects/7c/e36d0b97d90e4488a4cf604d8eb7da979d4dee": "bf33452efd2772be73b98bc0de05edf1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/9d/90b658033d56665ecdc0ab22ddad9239476517": "5e99470b5e41810cfd3c06b3da08e42f",
".git/objects/9d/b5b26cde5b46a140da7591f130af354a42573b": "eb294a28e93a600b55703c1024a2e30d",
".git/objects/9f/bf2a897dc3c1b7146a54ca899cce3af5a6055f": "b7d983a1abbc10f42fa3f918410f8425",
".git/objects/a4/64960542233bfe5006219adcda6fc01bc76c7f": "19b74eea42d51903d216ffbe4ebbdc75",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b2/b663ef0745d9c2e3f5138cd60a2b63b0d2b5d8": "dd84a618fc2f6f4ba1b463b6c2bf256c",
".git/objects/b5/5a9c1d9be4fb95583f6ced7feb3ea0cfdcaccd": "451ea3ad4650221f8704d3bcc13e4736",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/7b22379ddbda774ac49b8f09b279f6618b93b9": "f7257c7550ae61092ae309fb7afe6ed5",
".git/objects/c2/293d5c8b81de044a73eeb80e461d7df177e726": "015cfeec435cdff4a547c1416f2cee14",
".git/objects/ce/752cc66b630dba2a4197a2027d7e9559cfa92d": "f08fb82f0b8fcf9dc62a55d3b8964343",
".git/objects/d3/e1a8c53c93a778a113c9851d4c32b87f66afa8": "4f683dcb9a5519d057ead4b3b9307080",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/f9279adc03d2361ac247ea98d177e79f97bc46": "d8a26d7be425b656940414c27029d5f9",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e1/8003b2041d8220f7a746887cc55886f591673a": "228aeb381a3e00caf99f14d4d514a637",
".git/objects/e1/a3270c895635cba488a07b9d5ac9ef423eb39b": "3a0125d0612b989f39f157215e6864a6",
".git/objects/e1/f2ae85c9d0cf8014c35f97fe81cf7a6023aab5": "3f63a912bcdefd9ef5524adbd393f168",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/b0594059271d79a4d2e8df00a53e69ef0dac5e": "4d4cfef0a0417fcb6baf0196ef348bb4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/adf62052dce6358ea8c143686e1464c2a428f6": "c31e1525b15cac02a70d4c95ee876148",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/9fdbda2fd259f106747f68424ccda83a1d1340": "715b78744dedf4fc67f9a7ad50a01fcb",
".git/objects/f6/2c3c8660ba81d175a6c92d95a640c0dcb6ef6f": "0c2afa85c2e40cc76532a6d318ff61ed",
".git/objects/f7/bedb0891cbd19dcea05b3260d4b46eb5cf8732": "535a9c766a927743cd3bcde29b355de0",
".git/refs/heads/master": "f24c499ade1e5dca22b35d1ff607af76",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "f24c499ade1e5dca22b35d1ff607af76",
"assets/AssetManifest.bin": "b72ae60c5a48b1eb2cb53b12c98a8354",
"assets/AssetManifest.bin.json": "08b7b375efad0c13e1a6ad4d6f7c2eeb",
"assets/AssetManifest.json": "85d82c21747125c1dd471543899db081",
"assets/assets/collage.jpg": "c03dd7c83978ae6e012f55dd41bb3ed4",
"assets/assets/Cv.jpg": "b472879dedf906c99210322aa14703dd",
"assets/assets/dot.png": "9fc5e7340e0e1ad8fafa0579ee5887e8",
"assets/assets/Facebook.png": "453c928eaf6f1bc1581e0a645a097378",
"assets/assets/fazi2.jpg": "6f86fee34dbd4f3d049878b01f61330b",
"assets/assets/instragram.jpeg": "b0648af1f79ee5708db296b4412baaad",
"assets/assets/man.png": "f03f7f5e73f2124f2b2bbdb809c77abd",
"assets/assets/nike.jpg": "ed2fc52bef22d5cbd531bffd04331685",
"assets/assets/p.jpg": "36e0d786e53ef170c41f16daef0f8a6f",
"assets/assets/pro.jpg": "41104ba12ce0f967bf11c6f789c0fd9a",
"assets/assets/whatsapp.jpg": "9e230c36d53688f3be00bda502743f76",
"assets/FontManifest.json": "2d0aa196e77fad100c0ac7aa3540936c",
"assets/fonts/archiro.ttf": "02295880efb2fc088d46cbb10136bc0b",
"assets/fonts/bold.ttf": "e185e4368acb853102f2366fa4099730",
"assets/fonts/MaterialIcons-Regular.otf": "4b0d1dcf6e490f2e9242050475daabb4",
"assets/fonts/ubuntu-bold.ttf": "896a60219f6157eab096825a0c9348a8",
"assets/NOTICES": "0f0780514510d4e4cfd7926ed45dd29a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "73089d921a9fd474caf29ac1fd1aa650",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e06040cac3b7d9ab44e9321fe050df24",
"/": "e06040cac3b7d9ab44e9321fe050df24",
"main.dart.js": "80a8a0255f80f35efcccbf1b3490240a",
"manifest.json": "8cdde40dfcbfdef7c26350e68bcedc7f",
"version.json": "ed4196a263a7919322bbf877a1c4ca63"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
