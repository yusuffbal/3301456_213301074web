'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
".git/config": "69be701bde5ec9d6ae27f4146ecd59a7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "09a1de7b7799b51916d83f3e202d5fea",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e5b8249b00f9e8bb5be724fb1373a68e",
".git/logs/refs/heads/main": "0c546cab20bd9057191e8899566a9b9d",
".git/logs/refs/remotes/origin/main": "69b4af2842e6ebdcf2c073c12e1699e4",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/07/f4ad42821c9aa994f85648f0f25519c656f9eb": "c1cc2ce121ddf9f8c036677332d7224a",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0f/e15636a06743027bc006ea1dc9583190527775": "75d7ffe121b41cf167c5c430e78c6da0",
".git/objects/19/ab99de443c3064001a88c2bd102102108658ea": "402521dc3de9bb0bd9cc7733d79ce459",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/3267b7c9df86883ce0795e7f6f4f8650597f5d": "e3e14d703047cea2052021041dbda3cb",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/21/2af9e43c0d6532ba301f6925f4396e6ea53ac5": "6aa2999bbb234e37869d26ffecbd26e2",
".git/objects/24/46377a7903ea4a709d8f499a55d67f7ce3a382": "40d50969621f3ea2d3f6e5267ee830c4",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/31172b6cfad16fd49809b35da996ada2bad5b5": "ef3f861c08c5990f4c1ef205c0ccf44f",
".git/objects/37/4e23128ad7de35bd32eba1ba7a86438dec704a": "04fc1873d685f89902b596da23b3c31d",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3c/a5614b4e44f8ec11b3b55352a2db18f351d798": "7e559a778e6fff1dc8b9f70247304a0b",
".git/objects/3e/ea7cd12b5683921490087f24f1b08bbf0498dc": "a1597df9a21f4d4ba89677de8c758c60",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/50/f8368f975e41476f9f43b290758db1af2e9ab2": "a28bc9beb3d11a89fd076014a16f6840",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/8cdde2e9efd41dc44aeb8f67c763340b9f097c": "d10789c769a6978391ffafb105bc8c6e",
".git/objects/53/524b417db048958c9fe84bb40a3fa036ddc28a": "ed4e9396eddabbc29c818ea00fd1a930",
".git/objects/59/259f74d81766cfeab4ef9c4cf7a1f6fc2afb17": "b12caa8946d26a67a489e72441dcd828",
".git/objects/5b/31e4db282768f48b21e47a98492cbed14aaf05": "95e3de10bcbfe92300153a8df073db3e",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/67/3ff2d3fd45a2ef8bde38d54d788aedfcc43d5f": "5e23ab9e663705c5f47e663d55586f5e",
".git/objects/67/911b06a1cdb3be173e186c266308be6bbdc5d4": "3eacf9c4c9b71c77820804704c82536b",
".git/objects/68/fb7657ff145cc450001da75bb0e51d0953ba4d": "808c659a9584490c2a66c6b2fef7a507",
".git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
".git/objects/6b/da4e1909f9b5277663ae82360411f5258716af": "d00a5d531240ff02a57b089da5c30f19",
".git/objects/6c/af993036a8770066e2074c2879ac2aaa732f1a": "5c1867ae416fb8c7b3faf579cc575879",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/77/8eaec6741541eab1af2c4bccd9c15181b94ded": "3235417e07b9826b0e9265ea7a371925",
".git/objects/77/d947c37bb35493a49c6fe2675c26f3cf3b67fe": "5db5f413c8fa5e4535ef6d6b877c3080",
".git/objects/7d/5eb41820c4cdeb70383365449702d3d8fd62b9": "9c867867009b7e673d7a9bd30f110f10",
".git/objects/82/9444570f5b88eb8c41bbde340b85087464827d": "847be2fcfa1230d33f095f22ecb753ea",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/a1/9e529cc96f1c341b6317b6f0efe0e819ca4de4": "4909aec5db6687b0029c84e1643eef64",
".git/objects/a2/03f6269d35a22d8e6a1b94e1b363f9ac82fd6a": "37987b43dbcb9d37f00d1b903fa56605",
".git/objects/a8/394f3bbecad574472ebcb2961a7f893d13b9b4": "71f4e0a641c7b313d0a1b6a68134b9d1",
".git/objects/aa/78efb7ea9dffb537f28a8995a095ebd840f619": "3e7b2646f39518ca431d039ee3b5f4f3",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/d4ee1b5bc4ae45d23765019749077c77cea7a9": "7b56ce88ff141a4ad3bcf042224ffeb3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/cc/3496c3921d59b5a5a17ea9dc347a2a4f7e01fa": "d867035c0520a63a71e948890928135b",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/4a0538033a4552f632f457ffb0f120d3f06eca": "a1ad5c171bcae6ff4db0568c2d29e1bf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/45146c058f83656378fc90f61fd4b42f9b9f8e": "1576baf018bc52642071a4d27e5394ed",
".git/objects/e0/d16672667447b3bc21353d24ee067f4fb8a333": "01cf285725896779fc46f16dc8821b2f",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/6d4ffb6ca15aced6104e6125cba715907a5b73": "54515e466d96e630b1877cf5c4c7cffe",
".git/refs/heads/main": "09efdc0e018cb802309a798df4c91d79",
".git/refs/remotes/origin/main": "7f58979ea90abfb5d4bffbaa652d0b53",
"assets/AssetManifest.bin": "0528d9d1006c152f1717eb3ff6ec19cf",
"assets/AssetManifest.json": "977ffc0551e05592e0c723c9cb9fd1c9",
"assets/assets/images/bilet.png": "11da5879fc0121c6617c49438e8e5d3f",
"assets/assets/images/bundesliga.png": "22045f912dc4e90420ae1160add0151b",
"assets/assets/images/canliskor.png": "9a633953b0811ac1ee0bbf85fda027c3",
"assets/assets/images/cikisyap.png": "56a4162114cf0a3d3a64218edbcc0422",
"assets/assets/images/erdivise.png": "3a6ab6166fee55a20cefe2f05d8bffea",
"assets/assets/images/kullanici.png": "b5db142cadd9db66490b5607671368ef",
"assets/assets/images/kupa.png": "d8bf22c5fa4f759c777e0bc3651409c4",
"assets/assets/images/laliga.png": "90b013a855039d686c78638f9f2252b3",
"assets/assets/images/lig1.png": "57e606668bb1e8fcbd55bcddfa4ea11c",
"assets/assets/images/ligue1.png": "b56fa76bb1f94903d1f96841772c9b36",
"assets/assets/images/pl.png": "b49a909b1fb4906bfc7bbe73b43a9950",
"assets/assets/images/seria.png": "ff94ccf99be626878d7a0ef8e0e753c1",
"assets/assets/images/topImage.png": "22fa8a102eec27f0a466a8a5fb5fc1b9",
"assets/assets/images/user.png": "66ef4d755515fafe0f7d3821af66491c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "5844869690664cb26d57bc6ca7bdd9a3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "be6e77db79fe008da26ffc5d87755a68",
"/": "be6e77db79fe008da26ffc5d87755a68",
"main.dart.js": "3fa1ad2a7cc9a07cac018fdc41535810",
"manifest.json": "c7bfb8dbd70185598f1feab5482825cb",
"version.json": "1c96bb35f8b9a3fa53f4fe3357a4bd8e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
