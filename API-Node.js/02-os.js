import os from 'node:os';

// Informations sur le système d'exploitation
console.log('Système d\'exploitation :', os.type());
console.log('Version du système d\'exploitation :', os.release());
console.log('Architecture du système :', os.arch());
console.log('Nom de l\'hôte :', os.hostname());
console.log('Plateforme :', os.platform());
console.log('Temps de fonctionnement :', os.uptime(), 'secondes');
console.log('Mémoire totale :', os.totalmem(), 'octets');
console.log('Mémoire libre :', os.freemem(), 'octets');
console.log('Répertoire temporaire :', os.tmpdir());
console.log('Utilisateurs connectés :', os.userInfo());
console.log('Réseau :', os.networkInterfaces());
