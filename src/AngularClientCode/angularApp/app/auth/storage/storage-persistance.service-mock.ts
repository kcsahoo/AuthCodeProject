import { Injectable } from '@angular/core';

export type SilentRenewState = 'running' | '';

@Injectable()
export class StoragePersistanceServiceMock {
    private itemsInternal = [];

    private STORAGE_PREFIX = 'testing_';

    private storageAuthResult = 'authorizationResult';

    public get authResult(): any {
        return this.retrieve(this.storageAuthResult);
    }

    public set authResult(value: any) {
        this.store(this.storageAuthResult, value);
    }

    private storageAccessToken = 'authorizationData';

    public get accessToken(): string {
        return this.retrieve(this.storageAccessToken) || '';
    }

    public set accessToken(value: string) {
        this.store(this.storageAccessToken, value);
    }

    private storageIdToken = 'authorizationDataIdToken';

    public get idToken(): string {
        return this.retrieve(this.storageIdToken) || '';
    }

    public set idToken(value: string) {
        this.store(this.storageIdToken, value);
    }

    private storageAuthorizedState = 'storageAuthorizedState';

    public get authorizedState(): string | undefined {
        return this.retrieve(this.storageAuthorizedState);
    }

    public set authorizedState(value: string | undefined) {
        this.store(this.storageAuthorizedState, value);
    }

    private storageUserData = 'userData';

    public get userData(): any {
        return this.retrieve(this.storageUserData);
    }

    public set userData(value: any) {
        this.store(this.storageUserData, value);
    }

    private storageAuthNonce = 'authNonce';

    public get authNonce(): string {
        return this.retrieve(this.storageAuthNonce) || '';
    }

    public set authNonce(value: string) {
        this.store(this.storageAuthNonce, value);
    }

    private storageCodeVerifier = 'codeVerifier';

    public get codeVerifier(): string {
        return this.retrieve(this.storageCodeVerifier) || '';
    }

    public set codeVerifier(value: string) {
        this.store(this.storageCodeVerifier, value);
    }

    private storageAuthStateControl = 'authStateControl';

    public get authStateControl(): string {
        return this.retrieve(this.storageAuthStateControl) || '';
    }

    public set authStateControl(value: string) {
        this.store(this.storageAuthStateControl, value);
    }

    private storageSessionState = 'session_state';

    public get sessionState(): any {
        return this.retrieve(this.storageSessionState);
    }

    public set sessionState(value: any) {
        this.store(this.storageSessionState, value);
    }

    private storageSilentRenewRunning = 'storageSilentRenewRunning';

    public get silentRenewRunning(): SilentRenewState {
        return this.retrieve(this.storageSilentRenewRunning) || '';
    }

    public set silentRenewRunning(value: SilentRenewState) {
        this.store(this.storageSilentRenewRunning, value);
    }
    private storageAccessTokenExpiresIn = 'access_token_expires_at';
    get accessTokenExpiresIn(): any {
        return this.retrieve(this.storageAccessTokenExpiresIn);
    }

    set accessTokenExpiresIn(value: any) {
        this.store(this.storageAccessTokenExpiresIn, value);
    }
    private retrieve(key: string): any {
        const keyToRead = this.createKeyWithPrefix(key);
        return this.itemsInternal.find((x) => x.key === keyToRead)?.value;
    }

    private store(key: string, value: any) {
        const keyToStore = this.createKeyWithPrefix(key);
        this.itemsInternal.push({ key: keyToStore, value });
    }

    resetStorageFlowData() {
        this.store(this.storageSessionState, '');
        this.store(this.storageSilentRenewRunning, '');
        this.store(this.storageCodeVerifier, '');
    }

    resetAuthStateStorageData() {
        this.store(this.authorizedState, false);
        this.store(this.storageAccessToken, '');
        this.store(this.storageIdToken, '');
        this.store(this.storageAuthResult, '');
    }

    getAccessToken(): any {
        return this.retrieve(this.storageAccessToken);
    }

    getIdToken(): any {
        return this.retrieve(this.storageIdToken);
    }

    getRefreshToken(): any {
        if (!this.authResult) {
            return null;
        }

        return this.authResult.refresh_token;
    }

    resetAuthStateInStorage() {}

    private createKeyWithPrefix(key: string) {
        return `${this.STORAGE_PREFIX}_${key}`;
    }
}
