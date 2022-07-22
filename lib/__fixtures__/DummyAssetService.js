"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyAssetService = void 0;
var did_asset_library_core_obfuscated_1 = require("@bloxmove-com/did-asset-library-core-obfuscated");
var dummyVC = new did_asset_library_core_obfuscated_1.VerifiableCredential(['Test'], { test: '', id: '1001' }, 'me', 'today');
var dummyDID = {
    '@context': [
        'https://www.w3.org/ns/did/v1',
        'https://identity.foundation/EcdsaSecp256k1RecoverySignature2020/lds-ecdsa-secp256k1-recovery2020-0.0.jsonld',
    ],
    id: "did:ethr:mine:0x007",
    verificationMethod: [
        {
            id: "did:ethr:mine:0x007#controller",
            type: 'EcdsaSecp256k1RecoveryMethod2020',
            controller: "did:ethr:mine:0x007",
            blockchainAccountId: "0x007@eip155:mychain",
        },
        {
            id: "did:ethr:mine:0x007#delegate-1",
            type: 'EcdsaSecp256k1RecoveryMethod2020',
            controller: "did:ethr:mine:0x007",
            blockchainAccountId: "myaccountAddress@eip155:mychain",
        },
    ],
    authentication: ["did:ethr:mine:0x007#controller"],
    assertionMethod: [
        "did:ethr:mine:0x007#controller",
        "did:ethr:mine:0x007#delegate-1",
    ],
};
var DummyAssetService = /** @class */ (function () {
    function DummyAssetService() {
    }
    DummyAssetService.prototype.init = function () {
        return Promise.resolve();
    };
    DummyAssetService.prototype.createAsset = function (assetName, initialDataProperties, assetType, accountAddress) {
        return Promise.resolve('');
    };
    DummyAssetService.prototype.addInvolvedParties = function (assetDID, involvedPartiesDIDs, permissions) {
        return Promise.resolve();
    };
    DummyAssetService.prototype.getInvolvedParties = function (assetDID, permission) {
        return Promise.resolve(['']);
    };
    DummyAssetService.prototype.getOwner = function (assetDID) {
        return Promise.resolve('');
    };
    DummyAssetService.prototype.getDataProperty = function (assetDID, key, assetType) {
        return Promise.resolve(null);
    };
    DummyAssetService.prototype.createDataProperty = function (assetDID, key, value, assetType, changable) {
        return Promise.resolve();
    };
    DummyAssetService.prototype.updateDataProperty = function (assetDID, key, value, assetType) {
        return Promise.resolve();
    };
    DummyAssetService.prototype.getAttestations = function (assetDID, topic) {
        return Promise.resolve(['']);
    };
    DummyAssetService.prototype.setAttestation = function (assetDID, topic, vc) {
        return Promise.resolve();
    };
    DummyAssetService.prototype.resolveName = function (name) {
        return Promise.resolve(null);
    };
    DummyAssetService.prototype.setName = function (name, assetDID) {
        return Promise.resolve();
    };
    DummyAssetService.prototype.verifySignature = function (signerDID, message, signature) {
        return Promise.resolve(false);
    };
    DummyAssetService.prototype.signMessage = function (message) {
        return Promise.resolve('signed with mock asset service');
    };
    DummyAssetService.prototype.isValidDID = function (assetDID) {
        return Promise.resolve(false);
    };
    DummyAssetService.prototype.getDIDDocument = function (assetDID) {
        return Promise.resolve(dummyDID);
    };
    DummyAssetService.prototype.setDIDDocument = function (didDocument) {
        return Promise.resolve();
    };
    DummyAssetService.prototype.createVerifiableCredential = function (type, credentialSubject, proofPurpose, expirationDate) {
        return Promise.resolve(dummyVC);
    };
    DummyAssetService.prototype.createVerifiablePresentation = function (verifiableCredentials, proofPurpose, expirationDate) {
        return Promise.resolve('');
    };
    DummyAssetService.prototype.validateVerifiableCredential = function (verifiableCredential) {
        return Promise.resolve(dummyVC);
    };
    DummyAssetService.prototype.validateVerifiablePresentation = function (expectedSignerDid, verifiablePresentation) {
        return Promise.resolve([dummyVC]);
    };
    return DummyAssetService;
}());
exports.DummyAssetService = DummyAssetService;
