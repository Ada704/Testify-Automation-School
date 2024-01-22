package com.Task19;

public class Task19a {
    private int ballSize;

    private String ballColour;
    private String ballTexture;

    public Task19a(int size) {
        this.ballSize = size;
    }

    public String getBallColour() {
        return ballColour;
    }

    public String getBallTexture() {
        return ballTexture;
    }

    public void setBallColour(String colour) {
        this.ballColour = colour;
    }

    public void setBallTexture(String texture) {
        this.ballTexture = texture;
    }

        public void modifyBallSize ( int newSize){
            System.out.println("Changing ball size is not allowed.");
        }
    }
